using System.ComponentModel.DataAnnotations.Schema;

namespace data_models.ResponseData.Models.Messaging
{
    [Table("ILA_ITEM_IDENTITIES")]
    public class ItemIdentity
    {
        public int Id { get; set; }
        public string Identifier { get; set; }
        public string Name { get; set; }
    }
}