using System.ComponentModel.DataAnnotations.Schema;
using fix_extensao_area.Case_Helpers.Models.CaseHelpers.Enums;

namespace fix_extensao_area.Case_Helpers.Models.CaseHelpers
{
    [Table("ILA_ITEM_RISCO_PRIVACIDADE")]
    public class ItemRiscoPrivacidade
    {
        public int Id { get; set; }
        public TipoRiscoPrivacidade TipoRisco { get; set; }
        public string Observacoes { get; set; }
    }
}