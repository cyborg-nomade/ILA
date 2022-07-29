using System.ComponentModel.DataAnnotations.Schema;

namespace fix_extensao_area.Case_Helpers.DTOs.CaseHelpers.CategoriasDadosPessoais
{
    [Table("ILA_EDUCACAO_TREINAMENTO")]
    public class EducacaoTreinamento
    {
        public int Id { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> AcademicosEscolares { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> RegistroFinanceiro { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> QualificacaoExperienciaProf { get; set; }
    }
}