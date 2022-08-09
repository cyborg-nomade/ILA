using data_models.ResponseData.DTOs.CaseHelpers;
using data_models.ResponseData.Models.CaseHelpers;
using data_models.ResponseData.Models.CaseHelpers.Enums;

namespace data_models.ResponseData.DTOs
{
    public class CaseDTO
    {
        public int Id { get; set; }
        public string? Ref { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Area { get; set; } = string.Empty;
        public DateTime DataCriacao { get; set; }
        public DateTime DataAtualizacao { get; set; }
        public DateTime? DataEnvio { get; set; }
        public DateTime? DataAprovacao { get; set; }
        public DateTime? DataProxRevisao { get; set; }
        public string UsernameResponsavel { get; set; } = string.Empty;
        public int GrupoCriadorId { get; set; }
        public bool Aprovado { get; set; }
        public bool Reprovado { get; set; }
        public string ComentarioReprovacao { get; set; } = string.Empty;
        public bool EncaminhadoAprovacao { get; set; }
        public bool DadosPessoaisSensiveis { get; set; }

        public AgenteTratamento Controlador { get; set; } = new AgenteTratamento();
        public AgenteTratamento Encarregado { get; set; } = new AgenteTratamento();
        public AgenteTratamento? ExtensaoEncarregado { get; set; } = new AgenteTratamento();
        public AgenteTratamento AreaTratamentoDados { get; set; } = new AgenteTratamento();
        public AgenteTratamento Operador { get; set; } = new AgenteTratamento();
        public ICollection<AgenteTratamento> Operadores { get; set; } = new List<AgenteTratamento>();

        public FasesCicloTratamento FasesCicloTratamento { get; set; } = new FasesCicloTratamento();
        public string DescricaoFluxoTratamento { get; set; } = string.Empty;
        public TipoAbrangenciaGeografica AbrangenciaGeografica { get; set; } = new TipoAbrangenciaGeografica();
        public List<FonteDados> FonteDados { get; set; } = new List<FonteDados>();
        public FinalidadeTratamento FinalidadeTratamento { get; set; } = new FinalidadeTratamento();

        public CategoriaDadosPessoais CategoriaDadosPessoais { get; set; } = new CategoriaDadosPessoais();
        public CatDadosPessoaisSensiveis CatDadosPessoaisSensiveis { get; set; } = new CatDadosPessoaisSensiveis();

        public TipoFrequenciaTratamento FrequenciaTratamento { get; set; } = new TipoFrequenciaTratamento();
        public int QtdeDadosTratados { get; set; }
        public int QtdeDadosSensiveisTratados { get; set; }

        public CategoriasTitulares CategoriasTitulares { get; set; }

        public ICollection<ItemCompartilhamentoDados> CompartilhamentoDadosPessoais { get; set; } =
            new List<ItemCompartilhamentoDados>();

        public ICollection<ItemMedidaSegurancaPrivacidade> MedidasSegurancaPrivacidade { get; set; } =
            new List<ItemMedidaSegurancaPrivacidade>();

        public ICollection<ItemTransferenciaInternacional> TransferenciaInternacional { get; set; } =
            new List<ItemTransferenciaInternacional>();

        public ICollection<ItemContratoTi> ContratoServicosTITratamentoDados { get; set; } = new List<ItemContratoTi>();
        public ICollection<ItemRiscoPrivacidade> RiscosPrivacidade { get; set; } = new List<ItemRiscoPrivacidade>();

        public ICollection<ItemObservacoesProcesso> ObservacoesProcesso { get; set; } =
            new List<ItemObservacoesProcesso>();

        public RadiosClicked RadiosClicked { get; set; } = new RadiosClicked();

        public override string ToString()
        {
            return @$"{nameof(Id)}: {Id}, 
{nameof(Ref)}: {Ref}, 
{nameof(Nome)}: {Nome}, 
{nameof(Area)}: {Area}, 
{nameof(DataCriacao)}: {DataCriacao}, 
{nameof(DataAtualizacao)}: {DataAtualizacao}, 
{nameof(DataEnvio)}: {DataEnvio}, 
{nameof(DataAprovacao)}: {DataAprovacao}, 
{nameof(DataProxRevisao)}: {DataProxRevisao}, 
{nameof(UsernameResponsavel)}: {UsernameResponsavel}, 
{nameof(GrupoCriadorId)}: {GrupoCriadorId}, 
{nameof(Aprovado)}: {Aprovado}, 
{nameof(Reprovado)}: {Reprovado}, 
{nameof(ComentarioReprovacao)}: {ComentarioReprovacao}, 
{nameof(EncaminhadoAprovacao)}: {EncaminhadoAprovacao}, 
{nameof(DadosPessoaisSensiveis)}: {DadosPessoaisSensiveis}, 
{nameof(Controlador)}: {Controlador}, 
{nameof(Encarregado)}: {Encarregado}, 
{nameof(ExtensaoEncarregado)}: {ExtensaoEncarregado}, 
{nameof(AreaTratamentoDados)}: {AreaTratamentoDados}, 
{nameof(Operador)}: {Operador}, 
{nameof(Operadores)}: {Operadores}, 
{nameof(FasesCicloTratamento)}: {FasesCicloTratamento}, 
{nameof(DescricaoFluxoTratamento)}: {DescricaoFluxoTratamento}, 
{nameof(AbrangenciaGeografica)}: {AbrangenciaGeografica}, 
{nameof(FonteDados)}: {FonteDados}, 
{nameof(FinalidadeTratamento)}: {FinalidadeTratamento}, 
{nameof(CategoriaDadosPessoais)}: {CategoriaDadosPessoais}, 
{nameof(CatDadosPessoaisSensiveis)}: {CatDadosPessoaisSensiveis}, 
{nameof(FrequenciaTratamento)}: {FrequenciaTratamento}, 
{nameof(QtdeDadosTratados)}: {QtdeDadosTratados}, 
{nameof(QtdeDadosSensiveisTratados)}: {QtdeDadosSensiveisTratados}, 
{nameof(CategoriasTitulares)}: {CategoriasTitulares}, 
{nameof(CompartilhamentoDadosPessoais)}: {CompartilhamentoDadosPessoais}, 
{nameof(MedidasSegurancaPrivacidade)}: {MedidasSegurancaPrivacidade}, 
{nameof(TransferenciaInternacional)}: {TransferenciaInternacional}, 
{nameof(ContratoServicosTITratamentoDados)}: {ContratoServicosTITratamentoDados}, 
{nameof(RiscosPrivacidade)}: {RiscosPrivacidade}, 
{nameof(ObservacoesProcesso)}: {ObservacoesProcesso}, 
{nameof(RadiosClicked)}: {RadiosClicked}";
        }
    }
}