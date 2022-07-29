using System.ComponentModel.DataAnnotations.Schema;
using fix_extensao_area.Case_Helpers.DTOs.CaseHelpers.CategoriasDadosPessoais;

namespace fix_extensao_area.Case_Helpers.DTOs.CaseHelpers
{
    [Table("ILA_CATEGORIA_DADOS_PESSOAIS")]
    public class CategoriaDadosPessoais
    {
        public int Id { get; set; }
        public Identificacao Identificacao { get; set; }
        public Financeiros Financeiros { get; set; }
        public Caracteristicas Caracteristicas { get; set; }
        public Habitos Habitos { get; set; }
        public CaracteristicasPsicologicas CaracteristicasPsicologicas { get; set; }
        public ComposicaoFamiliar ComposicaoFamiliar { get; set; }
        public InteressesLazer InteressesLazer { get; set; }
        public Associacoes Associacoes { get; set; }
        public ProcessoJudAdmCrim ProcessoJudAdmCrim { get; set; }
        public HabitosConsumo HabitosConsumo { get; set; }
        public Residenciais Residenciais { get; set; }
        public EducacaoTreinamento EducacaoTreinamento { get; set; }
        public ProfissaoEmprego ProfissaoEmprego { get; set; }
        public RegVideoImgVoz RegVideoImgVoz { get; set; }
        public Outros Outros { get; set; }
    }
}