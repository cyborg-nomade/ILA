using System.ComponentModel.DataAnnotations.Schema;

namespace fix_extensao_area.Case_Helpers.DTOs.CaseHelpers.CategoriasDadosPessoais
{
    [Table("ILA_OUTROS")]
    public class Outros
    {
        public int Id { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> OutrosItems { get; set; }
    }
}