using System.ComponentModel.DataAnnotations.Schema;
using data_models.ResponseData.Models.CaseHelpers.Enums;

namespace data_models.ResponseData.Models.CaseHelpers
{
    [Table("ILA_ITEM_RISCO_PRIVACIDADE")]
    public class ItemRiscoPrivacidade
    {
        public int Id { get; set; }
        public TipoRiscoPrivacidade TipoRisco { get; set; }
        public string Observacoes { get; set; }
    }
}