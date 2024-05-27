using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Enteties
{

    [Table("contact_type")]
    public class ContactType
    {
        [Key]
        [Column("id", TypeName = "int")]
        public int Id { get; set; }

        [Column("type", TypeName = "varchar(50)")]
        public string Type { get; set; } = string.Empty;
    }
}
