using fix_extensao_area.Case_Helpers.DTOs;

namespace fix_extensao_area.Responses;

public class GetCaseResponse
{
    public CaseDTO UniqueCase { get; set; } = new CaseDTO();
}