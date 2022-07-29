using fix_extensao_area.Case_Helpers.Models.CaseHelpers;

namespace fix_extensao_area.Responses;

public class ComiteMemberResponse
{
    public AgenteTratamento ComiteMember { get; set; } = new AgenteTratamento();
}