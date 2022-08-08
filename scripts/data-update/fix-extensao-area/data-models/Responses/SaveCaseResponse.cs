using data_models.ResponseData.Models;

namespace data_models.Responses;

public class SaveCaseResponse
{
    public Case CaseToSave { get; set; } = new Case();
}