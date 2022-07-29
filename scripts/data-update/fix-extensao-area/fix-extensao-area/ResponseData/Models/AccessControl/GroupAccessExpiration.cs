using System.ComponentModel.DataAnnotations.Schema;

namespace fix_extensao_area.Case_Helpers.Models.AccessControl
{
    [Table("ILA_GROUP_ACCESS_EXPIRATIONS")]
    public class GroupAccessExpiration
    {
        public int Id { get; set; }
        public Group Group { get; set; }
        public DateTime ExpirationDate { get; set; }
    }
}