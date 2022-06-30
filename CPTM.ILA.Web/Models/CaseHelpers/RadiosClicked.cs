using System.ComponentModel.DataAnnotations.Schema;
using CPTM.ILA.Web.Models.CaseHelpers.Enums;
using Newtonsoft.Json;

namespace CPTMILAWebModelsCaseHelpers
{
    [Table("ILA_RADIOS_CLICKED")]
    public class RadiosClicked
    {
        public int Id { get; set; }
        public StatusRadios HasOperador { get; set; }
        public StatusRadios FasesCicloTratamento { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisidentificacaoidPessoal")]
        public StatusRadios CatDadosPessoaisIdIdPessoal { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisidentificacaoidGov")]
        public StatusRadios CatDadosPessoaisIdIdGov { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisidentificacaoidEletronica")]
        public StatusRadios CatDadosPessoaisIdIdEletronica { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisidentificacaolocEletronica")]
        public StatusRadios CatDadosPessoaisIdLocEletronic { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirosidFin")]
        public StatusRadios CatDadosPessoaisFinIdFin { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirosrecursosFin")]
        public StatusRadios CatDadosPessoaisFinRecursosFin { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirosdividasDespesas")]
        public StatusRadios CatDadosPessoaisFinDivDespesas { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirossolvencia")]
        public StatusRadios CatDadosPessoaisFinSolvencia { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirosemprestimosHipotecaCredito")]
        public StatusRadios CatDadosPessoaisFinEmpHipCred { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirosassistenciaFin")]
        public StatusRadios CatDadosPessoaisFinAssistFin { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirosapoliceSeguro")]
        public StatusRadios CatDadosPessoaisFinApoliceSeg { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirosplanoPensao")]
        public StatusRadios CatDadosPessoaisFinPlanoPensao { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirostransacaoFin")]
        public StatusRadios CatDadosPessoaisFinTransFin { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceiroscompensacao")]
        public StatusRadios CatDadosPessoaisFinCompensacao { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirosatividadeProfissional")]
        public StatusRadios CatDadosPessoaisFinAtivProf { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirosacordosAjustes")]
        public StatusRadios CatDadosPessoaisFinAcordAjust { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisfinanceirosautorizacoesConsentimentos")]
        public StatusRadios CatDadosPessoaisFinAutConsent { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaiscaracteristicasdetalhesPessoais")]
        public StatusRadios CatDadosPessoaisCaracDetPess { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaiscaracteristicasdetalhesMilitares")]
        public StatusRadios CatDadosPessoaisCaracDetMil { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaiscaracteristicassituacaoImigracao")]
        public StatusRadios CatDadosPessoaisCaracSitImi { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaiscaracteristicasdescricaoFisica")]
        public StatusRadios CatDadosPessoaisCaracDescFis { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaishabitoshabitosPessoais")]
        public StatusRadios CatDadosPessoaisHabHabPessoais { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaishabitosestiloVida")]
        public StatusRadios CatDadosPessoaisHabEstiloVida { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaishabitosviagensDeslocamento")]
        public StatusRadios CatDadosPessoaisHabViagensDesl { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaishabitoscontatosSociais")]
        public StatusRadios CatDadosPessoaisHabContatosSoc { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaishabitosposses")]
        public StatusRadios CatDadosPessoaisHabPosses { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaishabitosdenunciasIncAcidentes")]
        public StatusRadios CatDadosPessoaisHabDenIncAci { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaishabitosdistincoes")]
        public StatusRadios CatDadosPessoaisHabDistincoes { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaishabitosusoMidia")]
        public StatusRadios CatDadosPessoaisHabUsoMidia { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaiscaracteristicasPsicologicasdescricaoPsi")]
        public StatusRadios CatDadosPessCaracPsicDescPsi { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaiscomposicaoFamiliarcasamentoCoabitacao")]
        public StatusRadios CatDadosPessoaisCompFamCasCoab { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaiscomposicaoFamiliarhistoricoConjugal")]
        public StatusRadios CatDadosPessoaisCompFamHistCon { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaiscomposicaoFamiliarmembrosFamilia")]
        public StatusRadios CatDadosPessoaisCompFamMemFam { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisinteressesLazeratividadesInteressesLaz")]
        public StatusRadios CatDadosPessIntLazAtivIntLaz { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisassociacoesoutrasAssNaoSensiveis")]
        public StatusRadios CatDadosPessoaisAssOutAssNSen { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisprocessoJudAdmCrimsuspeitas")]
        public StatusRadios CatDadosPessProcJudAdmCrimSus { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisprocessoJudAdmCrimcondenacoesSentencas")]
        public StatusRadios CatDadPessProcJudAdmCrimConSen { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisprocessoJudAdmCrimacoesJud")]
        public StatusRadios CatDadPessProcJudAdmCrimAcJud { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisprocessoJudAdmCrimpenalidadesAdm")]
        public StatusRadios CatDadPessProcJudAdmCrimPenAdm { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaishabitosConsumodadosBensServicos")]
        public StatusRadios CatDadPessHabConsDadBensServ { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisresidenciaisdadosResidencia")]
        public StatusRadios CatDadosPessoaisResDadRes { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaiseducacaoTreinamentoacademicosEscolares")]
        public StatusRadios CatDadosPessoaisEduTrAcadEsc { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaiseducacaoTreinamentoregistroFinanceiro")]
        public StatusRadios CatDadosPessoaisEduTrRegFin { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaiseducacaoTreinamentoqualificacaoExperienciaProf")]
        public StatusRadios CatDadosPessEduTrQualiExpProf { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisprofissaoEmpregoempregoAtual")]
        public StatusRadios CatDadosPessoaisProfEmpEmpAt { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisprofissaoEmpregorecrutamento")]
        public StatusRadios CatDadosPessoaisProfEmpRec { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisprofissaoEmpregorescisao")]
        public StatusRadios CatDadosPessoaisProfEmpResc { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisprofissaoEmpregocarreira")]
        public StatusRadios CatDadosPessoaisProfEmpCarr { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisprofissaoEmpregoabsenteismoDisciplina")]
        public StatusRadios CatDadosPessoaisProfEmpAbsDisc { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisprofissaoEmpregoavaliacaoDesempenho")]
        public StatusRadios CatDadosPessoaisProfEmpAvDes { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisregVideoImgVozvideoImagem")]
        public StatusRadios CatDadosPessRegVidImgVozVidImg { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisregVideoImgVozimagemVigilancia")]
        public StatusRadios CatDadosPessRegVidImgVozImgVig { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisregVideoImgVozvoz")]
        public StatusRadios CatDadosPessRegVidImgVozVoz { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoaisoutrosoutrosItems")]
        public StatusRadios CatDadosPessoaisOutOutItems { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveisorigemRacialEtnica")]
        public StatusRadios CatDadosPessSensOrigemRacEtn { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveisconviccaoReligiosa")]
        public StatusRadios CatDadosPessoaisSensConvRelig { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveisopiniaoPolitica")]
        public StatusRadios CatDadosPessoaisSensOpiniaoPol { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveisfiliacaoSindicato")]
        public StatusRadios CatDadosPessoaisSensFilSind { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveisfiliacaoOrgReligiosa")]
        public StatusRadios CatDadosPessoaisSensFilOrgRel { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveisfiliacaoCrencaFilosofica")]
        public StatusRadios CatDadosPessoaisSensFilCrenFil { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveisfiliacaoPreferenciaPolitica")]
        public StatusRadios CatDadosPessoaisSensFilPrefPol { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveissaudeVidaSexual")]
        public StatusRadios CatDadosPessSensSaudeVidaSex { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveisgeneticos")]
        public StatusRadios CatDadosPessoaisSensGeneticos { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveisbiometricos")]
        public StatusRadios CatDadosPessoaisSensBiometric { get; set; }


        public StatusRadios CompartilhamentoDadosPessoais { get; set; }
        public StatusRadios TransferenciaInternacional { get; set; }

        [JsonProperty(PropertyName = "contratoServicosTITratamentoDados")]
        public StatusRadios ContratoServicosTITrataDad { get; set; }
    }
}