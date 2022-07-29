using System.ComponentModel.DataAnnotations.Schema;

namespace fix_extensao_area.Case_Helpers.DTOs.CaseHelpers.CategoriasDadosPessoais
{
    [Table("ILA_COMPOSICAO_FAMILIAR")]
    public class ComposicaoFamiliar
    {
        public int Id { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> CasamentoCoabitacao { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> HistoricoConjugal { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> MembrosFamilia { get; set; }
    }
}