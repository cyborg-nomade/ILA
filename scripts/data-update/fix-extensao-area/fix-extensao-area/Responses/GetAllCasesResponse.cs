using fix_extensao_area.Case_Helpers.DTOs;

namespace fix_extensao_area.Responses;

public class GetAllCasesResponse
{
    public List<CaseListItem> CaseListItems { get; set; } = new List<CaseListItem>();
}