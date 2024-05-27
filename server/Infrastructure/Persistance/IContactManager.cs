using Domain.Enteties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistance
{
    public interface IContactManager
    {
        public Task<List<Contact>> GetContactsAsync(int ContactTye);
        public Task<Contact?> GetContactAsync(Guid id);
        public Task<bool> AddContactAsync(Contact contact);
        public Task<bool> RemoveContactAsync(Guid Id);
    }
}
