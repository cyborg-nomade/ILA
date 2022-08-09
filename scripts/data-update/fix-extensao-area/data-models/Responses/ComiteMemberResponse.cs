using data_models.ResponseData.Models.CaseHelpers;

namespace data_models.Responses;

public class ComiteMemberResponse
{
    public AgenteTratamento ComiteMember { get; set; } = new AgenteTratamento();
}