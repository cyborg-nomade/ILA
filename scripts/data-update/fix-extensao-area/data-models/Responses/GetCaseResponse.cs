using data_models.ResponseData.DTOs;

namespace data_models.Responses;

public class GetCaseResponse
{
    public CaseDTO UniqueCase { get; set; } = new CaseDTO();
}