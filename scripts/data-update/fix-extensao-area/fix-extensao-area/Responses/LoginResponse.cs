using fix_extensao_area.Case_Helpers.DTOs;

namespace fix_extensao_area.Responses;

public class LoginResponse
{
    public UserDto User { get; set; } = new UserDto();
    public string Token { get; set; } = string.Empty;
}