using System.ComponentModel.DataAnnotations.Schema;

namespace fix_extensao_area.Case_Helpers.DTOs.CaseHelpers.CategoriasDadosPessoais
{
    [Table("ILA_RESIDENCIAIS")]
    public class Residenciais
    {
        public int Id { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> DadosResidencia { get; set; }
    }
}