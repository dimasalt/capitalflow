using Infrastructure.Data_Access;
using Microsoft.EntityFrameworkCore;
using Domain.Enteties;

namespace Infrastructure.Persistance
{
    public class ContactManager : IContactManager
    {
        private readonly CapitalFlowDbContext _dbContext;

        public ContactManager(CapitalFlowDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        /// <summary>
        /// //by default this method will return all the contacts from list
        /// </summary>
        /// <param name="ContactType"></param>
        /// <returns>List of contacts</returns>        
        public async Task<List<Contact>> GetContactsAsync(int ContactType = 0) 
        {    
            List<Contact> contacts = new List<Contact>();

            if(ContactType == 0)            
                contacts = await _dbContext.Contacts.AsNoTracking().ToListAsync();            
            else            
                contacts = await _dbContext.Contacts.AsNoTracking().Where(n => n.Type == ContactType).ToListAsync();
            
            
            return contacts;
        }

        /// <summary>
        /// //by default this method will return a single contact based on contact id
        /// </summary>
        /// <param name="id">user id which is Guid</param>
        /// <returns>One contact or nothing</returns>               
        public async Task<Contact?> GetContactAsync(Guid id)
        {
            Contact? contact = new Contact();

            try
            {
                contact = await _dbContext.Contacts.AsNoTracking().FirstOrDefaultAsync(n => n.Id == id);

                if (contact == null)
                    return null;               
            }
            catch
            {
                return null;
            }

            //if everything is ok and contact is found then return contact
            return contact;
        }



        /// <summary>
        /// //The method will adds new contact and returns same contact but with conact id
        /// </summary>
        /// <param name="contact">contact object but without id</param>
        /// <returns>Created contact with contact id</returns>               
        public async Task<bool> AddContactAsync(Contact contact)
        {
            bool flag = true;

            try
            {
                await _dbContext.Contacts.AddAsync(contact);
                _dbContext.SaveChanges();
            }
            catch
            {
                flag = false;
            }
          
            return flag;
        }



        /// <summary>
        /// //Removes existing contact by given ID
        /// </summary>
        /// <param name="id">user id which is Guid</param>
        /// <returns>Returns true if success or false if fail</returns>               
        public async Task<bool> RemoveContactAsync(Guid Id)
        {
            try
            {
                Contact contact = await _dbContext.Contacts.SingleAsync(c => c.Id == Id);

                if (contact == null)
                    return false;


                _dbContext.Contacts.Remove(contact);
                await _dbContext.SaveChangesAsync();

                return true;
            }
            catch 
            { 
                return false; 
            }

            //await _dbContext.Contacts.Where(c => c.Id == Id).ExecuteDeleteAsync();        
        }
    }
}
