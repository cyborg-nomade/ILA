using System.ComponentModel.DataAnnotations.Schema;

namespace fix_extensao_area.Case_Helpers.DTOs.CaseHelpers.CategoriasDadosPessoais
{
    [Table("ILA_ASSOCIACOES")]
    public class Associacoes
    {
        public int Id { get; set; }

        public virtual ICollection<ItemCategoriaDadosPessoasDTO> OutrasAssNaoSensiveis { get; set; }
    }
}