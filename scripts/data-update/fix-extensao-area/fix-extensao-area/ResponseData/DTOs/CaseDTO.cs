using fix_extensao_area.Case_Helpers.DTOs.CaseHelpers;
using fix_extensao_area.Case_Helpers.Models.CaseHelpers;
using fix_extensao_area.Case_Helpers.Models.CaseHelpers.Enums;

namespace fix_extensao_area.Case_Helpers.DTOs
{
    public class CaseDTO
    {
        public int Id { get; set; }
        public string? Ref { get; set; }
        public string Nome { get; set; }
        public string Area { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataAtualizacao { get; set; }
        public DateTime? DataEnvio { get; set; }
        public DateTime? DataAprovacao { get; set; }
        public DateTime? DataProxRevisao { get; set; }
        public string UsernameResponsavel { get; set; }
        public int GrupoCriadorId { get; set; }
        public bool Aprovado { get; set; }
        public bool Reprovado { get; set; }
        public string ComentarioReprovacao { get; set; }
        public bool EncaminhadoAprovacao { get; set; }
        public bool DadosPessoaisSensiveis { get; set; }

        public Models.CaseHelpers.AgenteTratamento Controlador { get; set; }
        public Models.CaseHelpers.AgenteTratamento Encarregado { get; set; }
        public AgenteTratamento? ExtensaoEncarregado { get; set; }
        public Models.CaseHelpers.AgenteTratamento AreaTratamentoDados { get; set; }
        public Models.CaseHelpers.AgenteTratamento Operador { get; set; }

        public FasesCicloTratamento FasesCicloTratamento { get; set; }
        public string DescricaoFluxoTratamento { get; set; }
        public TipoAbrangenciaGeografica AbrangenciaGeografica { get; set; }
        public List<FonteDados> FonteDados { get; set; }
        public FinalidadeTratamento FinalidadeTratamento { get; set; }

        public CategoriaDadosPessoais CategoriaDadosPessoais { get; set; }
        public CatDadosPessoaisSensiveis CatDadosPessoaisSensiveis { get; set; }

        public TipoFrequenciaTratamento FrequenciaTratamento { get; set; }
        public int QtdeDadosTratados { get; set; }
        public int QtdeDadosSensiveisTratados { get; set; }

        public CategoriasTitulares CategoriasTitulares { get; set; }

        public ICollection<ItemCompartilhamentoDados> CompartilhamentoDadosPessoais { get; set; }
        public ICollection<ItemMedidaSegurancaPrivacidade> MedidasSegurancaPrivacidade { get; set; }
        public ICollection<ItemTransferenciaInternacional> TransferenciaInternacional { get; set; }
        public ICollection<ItemContratoTi> ContratoServicosTITratamentoDados { get; set; }
        public ICollection<ItemRiscoPrivacidade> RiscosPrivacidade { get; set; }
        public ICollection<ItemObservacoesProcesso> ObservacoesProcesso { get; set; }
        public RadiosClicked RadiosClicked { get; set; }

        public override string ToString()
        {
            return
                $"{nameof(Id)}: {Id}, {nameof(Ref)}: {Ref}, {nameof(Nome)}: {Nome}, {nameof(Area)}: {Area}, {nameof(DataCriacao)}: {DataCriacao}, {nameof(DataAtualizacao)}: {DataAtualizacao}, {nameof(DataEnvio)}: {DataEnvio}, {nameof(DataAprovacao)}: {DataAprovacao}, {nameof(DataProxRevisao)}: {DataProxRevisao}, {nameof(UsernameResponsavel)}: {UsernameResponsavel}, {nameof(GrupoCriadorId)}: {GrupoCriadorId}, {nameof(Aprovado)}: {Aprovado}, {nameof(Reprovado)}: {Reprovado}, {nameof(ComentarioReprovacao)}: {ComentarioReprovacao}, {nameof(EncaminhadoAprovacao)}: {EncaminhadoAprovacao}, {nameof(DadosPessoaisSensiveis)}: {DadosPessoaisSensiveis}, {nameof(Controlador)}: {Controlador}, {nameof(Encarregado)}: {Encarregado}, {nameof(ExtensaoEncarregado)}: {ExtensaoEncarregado}, {nameof(AreaTratamentoDados)}: {AreaTratamentoDados}, {nameof(Operador)}: {Operador}, {nameof(FasesCicloTratamento)}: {FasesCicloTratamento}, {nameof(DescricaoFluxoTratamento)}: {DescricaoFluxoTratamento}, {nameof(AbrangenciaGeografica)}: {AbrangenciaGeografica}, {nameof(FonteDados)}: {FonteDados}, {nameof(FinalidadeTratamento)}: {FinalidadeTratamento}, {nameof(CategoriaDadosPessoais)}: {CategoriaDadosPessoais}, {nameof(CatDadosPessoaisSensiveis)}: {CatDadosPessoaisSensiveis}, {nameof(FrequenciaTratamento)}: {FrequenciaTratamento}, {nameof(QtdeDadosTratados)}: {QtdeDadosTratados}, {nameof(QtdeDadosSensiveisTratados)}: {QtdeDadosSensiveisTratados}, {nameof(CategoriasTitulares)}: {CategoriasTitulares}, {nameof(CompartilhamentoDadosPessoais)}: {CompartilhamentoDadosPessoais}, {nameof(MedidasSegurancaPrivacidade)}: {MedidasSegurancaPrivacidade}, {nameof(TransferenciaInternacional)}: {TransferenciaInternacional}, {nameof(ContratoServicosTITratamentoDados)}: {ContratoServicosTITratamentoDados}, {nameof(RiscosPrivacidade)}: {RiscosPrivacidade}, {nameof(ObservacoesProcesso)}: {ObservacoesProcesso}, {nameof(RadiosClicked)}: {RadiosClicked}";
        }
    }
}