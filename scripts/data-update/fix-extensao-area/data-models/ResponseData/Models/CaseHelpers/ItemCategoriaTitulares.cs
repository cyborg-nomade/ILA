using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using data_models.ResponseData.Models.CaseHelpers.Enums;

namespace data_models.ResponseData.Models.CaseHelpers
{
    [Table("ILA_ITEM_CAT_TITULARES")]
    public class ItemCategoriaTitulares
    {
        public int Id { get; set; }
        public TipoCategoriaTitulares TipoCategoria { get; set; }
        [MaxLength(250)] public string Descricao { get; set; }
    }
}