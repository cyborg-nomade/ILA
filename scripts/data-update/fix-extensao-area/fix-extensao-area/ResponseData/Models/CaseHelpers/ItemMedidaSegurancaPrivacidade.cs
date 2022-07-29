using System.ComponentModel.DataAnnotations.Schema;
using fix_extensao_area.Case_Helpers.Models.CaseHelpers.Enums;

namespace fix_extensao_area.Case_Helpers.Models.CaseHelpers
{
    [Table("ILA_ITEM_MEDIDA_SEG_PRIV")]
    public class ItemMedidaSegurancaPrivacidade
    {
        public int Id { get; set; }
        public TipoMedidaSegurancaPrivacidade Tipo { get; set; }
        public string Descricao { get; set; }
    }
}