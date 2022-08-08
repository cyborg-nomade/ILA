using data_models.ResponseData.DTOs;

namespace data_models.Responses;

public class GetAllCasesResponse
{
    public List<CaseListItem> CaseListItems { get; set; } = new List<CaseListItem>();
}