using data_models.ResponseData.DTOs;

namespace data_models.Responses;

public class LoginResponse
{
    public UserDto User { get; set; } = new UserDto();
    public string Token { get; set; } = string.Empty;
}