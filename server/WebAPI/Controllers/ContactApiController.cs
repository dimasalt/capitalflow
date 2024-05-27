using Domain.Enteties;
using Infrastructure.Data_Access;
using Infrastructure.Persistance;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Controllers
{
    //[Authorize(Roles = "Admin")]
    [AllowAnonymous]
    [ApiController]
    [Route("api/v1/contact")]
    public class ContactApiController(IContactManager _contactMngr) : ControllerBase
    {
        /// <summary>
        /// Gets list of all contacts 
        /// </summary>    
        /// <param name="contactType">optional parameter to select which contact type we select, 0 stands for all contacts</param>
        /// <returns>Returns list of contacts</returns>
        [HttpGet("get/{contactType:int?}")]      
        public async Task<IResult> GetContactsAsync([FromRoute]int contactType = 0) {         
            
            List<Contact> contacts = await _contactMngr.GetContactsAsync(contactType);

            return Results.Ok(contacts);
        }

       
        /// <summary>
        /// Gets a single contact based on passed user ID
        /// </summary>    
        /// <param name="id">Needs contact ID to get desired contact</param>
        /// <returns>Returns one single contact</returns>
        [HttpGet("get/one/{id:Guid}")]
        public async Task<IResult> GetContactAsync([FromRoute]Guid id)
        {
            Contact? contact = await _contactMngr.GetContactAsync(id);

            return Results.Ok(contact);
        }


        //[HttpPost(Name = "add")]
        /// <summary>
        /// Adds new contact to database. Returns true if successfull, false if not.
        /// </summary>    
        /// <param name="contact">
        ///     Receives contact object, generates new Guid and adds it to database.     
        /// </param>
        /// <returns>Returns boolean true if successfull, false if not</returns>
        [HttpPut("add")]
        public async Task<IResult> AddContactAsync(Contact contact)
        {
            contact.Id = Guid.NewGuid();
            bool result = await _contactMngr.AddContactAsync(contact);
           
            return Results.Ok(result);
        }


        /// <summary>
        /// Removes selected contact. Returns true if successfull, false if not.
        /// </summary>    
        /// <param name="Id">
        ///     Receives contact Id.     
        /// </param>
        /// <returns>Returns boolean true if deletion is successfull, false if not</returns>
        [HttpDelete("delete")]
        public async Task<IResult> RemoveContactAsync(Guid Id)
        {           
            bool result = await _contactMngr.RemoveContactAsync(Id);

            if(result)
                return Results.Ok(result);
            else return Results.NoContent();
        }
    }
}
