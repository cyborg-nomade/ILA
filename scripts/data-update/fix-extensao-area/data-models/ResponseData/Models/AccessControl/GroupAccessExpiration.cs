using System.ComponentModel.DataAnnotations.Schema;

namespace data_models.ResponseData.Models.AccessControl
{
    [Table("ILA_GROUP_ACCESS_EXPIRATIONS")]
    public class GroupAccessExpiration
    {
        public int Id { get; set; }
        public Group Group { get; set; }
        public DateTime ExpirationDate { get; set; }
    }
}