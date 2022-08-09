using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace data_models.ResponseData.Models.AccessControl
{
    [Table("ILA_USERS")]
    public class User
    {
        public int Id { get; set; }
        [MaxLength(2000)] public string Username { get; set; }
        public bool IsComite { get; set; }
        public bool IsDPO { get; set; }
        public bool IsSystem { get; set; }
        public Group OriginGroup { get; set; }
        public ICollection<GroupAccessExpiration> GroupAccessExpirations { get; set; }
    }
}