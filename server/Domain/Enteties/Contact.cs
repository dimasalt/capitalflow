using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Enteties 
{
    [Table("contact")]
    //[Table("contact")]
    public class Contact
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Column("name", TypeName = "varchar(100)")]
        public string Name { get; set; } = string.Empty;

        [Column("address", TypeName ="varchar(150)")]
        public string? Address { get; set; } = string.Empty;

        [Column("phone", TypeName ="varchar(50)")]
        public string? Phone { get; set; } = string.Empty;

        [Column("email", TypeName ="varchar(50)")]
        public string? Email { get; set; } = string.Empty;

        [Column("note", TypeName = "varchar(50)")]
        public string? Note { get; set; } = string.Empty;

        [Column("type", TypeName = "int")]
        public int Type { get; set; } = 1;

        [Column("created_at", TypeName = "datetime")]
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
