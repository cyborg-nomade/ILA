// See https://aka.ms/new-console-template for more information

using data_models.ResponseData.DTOs;
using data_models.ResponseData.Models.ChangeLogging;
using data_models.Responses;
using RestSharp;

Console.WriteLine("Hello, World!");

//-login
var client = new RestClient("http://lgpd.cptm.info:7000/ILA/api");

var loginRequest = new RestRequest("users/login", Method.Post);
loginRequest.AddHeader("Content-Type", "application/json");
loginRequest.AddBody(new { username = "urielf", password = "W$BcEbrgq33!" });

var loginResponse = await client.ExecuteAsync<LoginResponse>(loginRequest);

var token = loginResponse.Data?.Token;
var user = loginResponse.Data?.User;

Console.WriteLine(token);
Console.WriteLine(user?.ToString());

//- get all cases

var getAllCasesRequest = new RestRequest("cases", Method.Get);
getAllCasesRequest.AddHeader("Content-Type", "application/json");
getAllCasesRequest.AddHeader("Authorization", "Bearer " + token);

var getAllCasesResponse = await client.ExecuteAsync<GetAllCasesResponse>(getAllCasesRequest);

var cases = getAllCasesResponse.Data?.CaseListItems;

Console.WriteLine("Count: " + cases?.Count);

if (cases != null)
    foreach (var @case in cases)
    {
        Console.WriteLine("Case ID: " + @case.Id);
        //- foreach case in cases
        //  - get case

        var caseResource = "cases/" + @case.Id;
        var getCaseRequest = new RestRequest(caseResource, Method.Get);
        getCaseRequest.AddHeader("Content-Type", "application/json");
        getCaseRequest.AddHeader("Authorization", "Bearer " + token);
        var getCaseResponse = await client.ExecuteAsync<GetCaseResponse>(getCaseRequest);

        var fullCase = getCaseResponse.Data?.UniqueCase;

        Console.WriteLine("Full Case ID: " + fullCase?.Id);
        Console.WriteLine("Grupo Criador ID: " + fullCase?.GrupoCriadorId);
        Console.WriteLine("Extensão Encarregado: " + fullCase?.ExtensaoEncarregado);

        //  - select owner group
        //  - get comite member for group

        var comiteMemberResource = "users/comite-members/" + fullCase?.GrupoCriadorId;
        var comiteMemberRequest = new RestRequest(comiteMemberResource, Method.Get);
        comiteMemberRequest.AddHeader("Content-Type", "application/json");
        comiteMemberRequest.AddHeader("Authorization", "Bearer " + token);

        var comiteMemberResponse = await client.ExecuteAsync<ComiteMemberResponse>(comiteMemberRequest);

        //  - select comite member area
        var comiteMember = comiteMemberResponse.Data?.ComiteMember;
        Console.WriteLine("Comite Member: " + comiteMember);

        if (fullCase != null)
        {
            //  - replace in case
            fullCase.ExtensaoEncarregado = comiteMember;


            //  - save case
            Console.WriteLine("Extensão Encarregado: " + fullCase?.ExtensaoEncarregado);
            var saveCaseResource = "cases/" + fullCase?.Id;
            var saveCaseRequest = new RestRequest(saveCaseResource, Method.Post);
            saveCaseRequest.AddHeader("Content-Type", "application/json");
            saveCaseRequest.AddHeader("Authorization", "Bearer " + token);
            saveCaseRequest.AddBody(new CaseChange()
            {
                Case = fullCase,
                ChangeLog = new ChangeLog()
                {
                    CaseDiff = "Update corretivo Extensão Encarregado: alterando área para a registrada no AD. 29/07",
                    CaseId = fullCase?.Id,
                    CaseRef = fullCase?.Ref,
                    ChangeDate = DateTime.Now,
                    UserId = user?.Id,
                    UsernameResp = user?.Username
                }
            });


            var saveCaseResponse = await client.ExecuteAsync<SaveCaseResponse>(saveCaseRequest);

            Console.WriteLine(saveCaseResponse.Content);

            var savedCase = saveCaseResponse.Data?.CaseToSave;

            Console.WriteLine(savedCase?.ToString());
        }
    }
//- end