using fix_extensao_area.Case_Helpers.Models;

namespace fix_extensao_area;

public class SaveCaseResponse
{
    public Case CaseToSave { get; set; } = new Case();
}