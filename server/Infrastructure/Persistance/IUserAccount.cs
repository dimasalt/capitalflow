using Infrastructure.Dto;
using static Infrastructure.Persistance.ServiceReponses;

namespace Infrastructure.Persistance
{
    public interface IUserAccount
    {
        Task<GeneralResponse> CreateAccountAsync(UserDto userDto);
        Task<LoginResponse> LoginAccountAsync(LoginDto loginDto);
        Task<LogoutResponse> LogoutAccountAsync(string token);
    }
}
