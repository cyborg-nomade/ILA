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
    //- foreach case in cases
    foreach (var @case in cases)
    {
        //Console.WriteLine("Case ID: " + @case.Id);
        //  - get case

        var caseResource = "cases/" + @case.Id;
        var getCaseRequest = new RestRequest(caseResource, Method.Get);
        getCaseRequest.AddHeader("Content-Type", "application/json");
        getCaseRequest.AddHeader("Authorization", "Bearer " + token);
        var getCaseResponse = await client.ExecuteAsync<GetCaseResponse>(getCaseRequest);

        var fullCase = getCaseResponse.Data?.UniqueCase;

        Console.WriteLine("\n\nFull Case ID: " + fullCase?.Id + "\n\n");

        if (fullCase != null)
        {
            Console.WriteLine("Operador before: \n");
            Console.WriteLine(fullCase.Operador + "\n");

            //-add operador to operadores array
            var oldOperador = fullCase.Operador;
            fullCase.Operadores.Add(oldOperador);

            Console.WriteLine("Operadores: \n");
            foreach (var operador in fullCase.Operadores)
            {
                Console.WriteLine(operador);
            }

            //-save case
            var saveCaseResource = "cases/" + fullCase?.Id;
            var saveCaseRequest = new RestRequest(saveCaseResource, Method.Post);
            saveCaseRequest.AddHeader("Content-Type", "application/json");
            saveCaseRequest.AddHeader("Authorization", "Bearer " + token);
            saveCaseRequest.AddBody(new CaseChange()
            {
                Case = fullCase,
                ChangeLog = new ChangeLog()
                {
                    CaseDiff = "Update corretivo Operadores: Migrando Operador para um array. 08/08",
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