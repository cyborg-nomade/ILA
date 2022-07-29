using System.ComponentModel.DataAnnotations.Schema;

namespace fix_extensao_area.Case_Helpers.DTOs.CaseHelpers.CategoriasDadosPessoais
{
    [Table("ILA_PROFISSAO_EMPREGO")]
    public class ProfissaoEmprego
    {
        public int Id { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> EmpregoAtual { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> Recrutamento { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> Rescisao { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> Carreira { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> AbsenteismoDisciplina { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> AvaliacaoDesempenho { get; set; }
    }
}