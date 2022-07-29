using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using fix_extensao_area.Case_Helpers.Models.CaseHelpers;
using fix_extensao_area.Case_Helpers.Models.CaseHelpers.Enums;

namespace fix_extensao_area.Case_Helpers.Models
{
    [Table("ILA_CASES")]
    public class Case
    {
        public int Id { get; set; }
        [MaxLength(250)] public string Ref { get; set; }
        [MaxLength(250)] public string Nome { get; set; }
        public string Area { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataAtualizacao { get; set; }
        public DateTime? DataEnvio { get; set; }
        public DateTime? DataAprovacao { get; set; }
        public DateTime? DataProxRevisao { get; set; }
        [MaxLength(250)] public string UsernameResponsavel { get; set; }
        public int GrupoCriadorId { get; set; }
        public bool Aprovado { get; set; }
        public bool Reprovado { get; set; }
        public string ComentarioReprovacao { get; set; }
        public bool EncaminhadoAprovacao { get; set; }
        public bool DadosPessoaisSensiveis { get; set; }

        public CaseHelpers.AgenteTratamento Controlador { get; set; }
        public CaseHelpers.AgenteTratamento Encarregado { get; set; }
        public CaseHelpers.AgenteTratamento ExtensaoEncarregado { get; set; }
        public CaseHelpers.AgenteTratamento AreaTratamentoDados { get; set; }
        public CaseHelpers.AgenteTratamento Operador { get; set; }

        public FasesCicloTratamento FasesCicloTratamento { get; set; }
        public string DescricaoFluxoTratamento { get; set; }
        public TipoAbrangenciaGeografica AbrangenciaGeografica { get; set; }
        public string FonteDados { get; set; }
        public FinalidadeTratamento FinalidadeTratamento { get; set; }

        public ICollection<ItemCategoriaDadosPessoais> ItensCategoriaDadosPessoais { get; set; }

        public TipoFrequenciaTratamento FrequenciaTratamento { get; set; }
        public int QtdeDadosTratados { get; set; }
        public int QtdeDadosSensiveisTratados { get; set; }

        public CategoriasTitulares CategoriasTitulares { get; set; }

        public ICollection<ItemCompartilhamentoDados> CompartilhamentoDadosPessoais { get; set; }
        public ICollection<ItemMedidaSegurancaPrivacidade> MedidasSegurancaPrivacidade { get; set; }
        public ICollection<ItemTransferenciaInternacional> TransferenciaInternacional { get; set; }
        public ICollection<ItemContratoTi> ContratoServicosTi { get; set; }
        public ICollection<ItemRiscoPrivacidade> RiscosPrivacidade { get; set; }
        public ICollection<ItemObservacoesProcesso> ObservacoesProcesso { get; set; }
        public RadiosClicked RadiosClicked { get; set; }
    }
}