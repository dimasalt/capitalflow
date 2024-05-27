using Infrastructure.Dto;
using static Infrastructure.Persistance.ServiceReponses;

namespace Infrastructure.Persistance
{
    public interface IUserAccount
    {
        Task<GeneralResponse> CreateAccount(UserDto userDto);
        Task<LoginResponse> LoginAccount(LoginDto loginDto);
    }
}
