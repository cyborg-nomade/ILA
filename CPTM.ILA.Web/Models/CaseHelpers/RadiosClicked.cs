using CPTM.ILA.Web.Models.CaseHelpers.Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace CPTM.ILA.Web.Models.CaseHelpers
{
    public class RadiosClicked
    {
        public StatusRadios FasesCicloTratamento { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.identificacao.idPessoal")]
        public StatusRadios CategoriaDadosPessoaisIdentificacaoIdPessoal { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.identificacao.idGov")]
        public StatusRadios CategoriaDadosPessoaisIdentificacaoIdGov { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.identificacao.idEletronica")]
        public StatusRadios CategoriaDadosPessoaisIdentificacaoIdEletronica { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.identificacao.locEletronica")]
        public StatusRadios CategoriaDadosPessoaisIdentificacaoLocEletronica { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.idFin")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosIdFin { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.recursosFin")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosRecursosFin { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.dividasDespesas")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosDividasDespesas { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.solvencia")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosSolvencia { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.emprestimosHipotecaCredito")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosEmprestimosHipotecaCredito { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.assistenciaFin")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosAssistenciaFin { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.apoliceSeguro")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosApoliceSeguro { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.planoPensao")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosPlanoPensao { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.transacaoFin")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosTransacaoFin { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.compensacao")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosCompensacao { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.atividadeProfissional")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosAtividadeProfissional { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.acordosAjustes")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosAcordosAjustes { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.financeiros.autorizacoesConsentimentos")]
        public StatusRadios CategoriaDadosPessoaisFinanceirosAutorizacoesConsentimentos { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.caracteristicas.detalhesPessoais")]
        public StatusRadios CategoriaDadosPessoaisCaracteristicasDetalhesPessoais { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.caracteristicas.detalhesMilitares")]
        public StatusRadios CategoriaDadosPessoaisCaracteristicasDetalhesMilitares { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.caracteristicas.situacaoImigracao")]
        public StatusRadios CategoriaDadosPessoaisCaracteristicasSituacaoImigracao { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.caracteristicas.descricaoFisica")]
        public StatusRadios CategoriaDadosPessoaisCaracteristicasDescricaoFisica { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.habitos.habitosPessoais")]
        public StatusRadios CategoriaDadosPessoaisHabitosHabitosPessoais { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.habitos.estiloVida")]
        public StatusRadios CategoriaDadosPessoaisHabitosEstiloVida { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.habitos.viagensDeslocamento")]
        public StatusRadios CategoriaDadosPessoaisHabitosViagensDeslocamento { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.habitos.contatosSociais")]
        public StatusRadios CategoriaDadosPessoaisHabitosContatosSociais { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.habitos.posses")]
        public StatusRadios CategoriaDadosPessoaisHabitosPosses { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.habitos.denunciasIncAcidentes")]
        public StatusRadios CategoriaDadosPessoaisHabitosDenunciasIncAcidentes { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.habitos.distincoes")]
        public StatusRadios CategoriaDadosPessoaisHabitosDistincoes { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.habitos.usoMidia")]
        public StatusRadios CategoriaDadosPessoaisHabitosUsoMidia { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.caracteristicasPsicologicas.descricaoPsi")]
        public StatusRadios CategoriaDadosPessoaisCaracteristicasPsicologicasDescricaoPsi { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.composicaoFamiliar.casamentoCoabitacao")]
        public StatusRadios CategoriaDadosPessoaisComposicaoFamiliarCasamentoCoabitacao { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.composicaoFamiliar.historicoConjugal")]
        public StatusRadios CategoriaDadosPessoaisComposicaoFamiliarHistoricoConjugal { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.composicaoFamiliar.membrosFamilia")]
        public StatusRadios CategoriaDadosPessoaisComposicaoFamiliarMembrosFamilia { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.interessesLazer.atividadesInteressesLaz")]
        public StatusRadios CategoriaDadosPessoaisInteressesLazerAtividadesInteressesLaz { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.associacoes.outrasAssNaoSensiveis")]
        public StatusRadios CategoriaDadosPessoaisAssociacoesOutrasAssNaoSensiveis { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.processoJudAdmCrim.suspeitas")]
        public StatusRadios CategoriaDadosPessoaisProcessoJudAdmCrimSuspeitas { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.processoJudAdmCrim.condenacoesSentencas")]
        public StatusRadios CategoriaDadosPessoaisProcessoJudAdmCrimCondenacoesSentencas { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.processoJudAdmCrim.acoesJud")]
        public StatusRadios CategoriaDadosPessoaisProcessoJudAdmCrimAcoesJud { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.processoJudAdmCrim.penalidadesAdm")]
        public StatusRadios CategoriaDadosPessoaisProcessoJudAdmCrimPenalidadesAdm { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.habitosConsumo.dadosBensServicos")]
        public StatusRadios CategoriaDadosPessoaisHabitosConsumoDadosBensServicos { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.residenciais.dadosResidencia")]
        public StatusRadios CategoriaDadosPessoaisResidenciaisDadosResidencia { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.educacaoTreinamento.academicosEscolares")]
        public StatusRadios CategoriaDadosPessoaisEducacaoTreinamentoAcademicosEscolares { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.educacaoTreinamento.registroFinanceiro")]
        public StatusRadios CategoriaDadosPessoaisEducacaoTreinamentoRegistroFinanceiro { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.educacaoTreinamento.qualificacaoExperienciaProf")]
        public StatusRadios CategoriaDadosPessoaisEducacaoTreinamentoQualificacaoExperienciaProf { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.profissaoEmprego.empregoAtual")]
        public StatusRadios CategoriaDadosPessoaisProfissaoEmpregoEmpregoAtual { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.profissaoEmprego.recrutamento")]
        public StatusRadios CategoriaDadosPessoaisProfissaoEmpregoRecrutamento { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.profissaoEmprego.rescisao")]
        public StatusRadios CategoriaDadosPessoaisProfissaoEmpregoRescisao { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.profissaoEmprego.carreira")]
        public StatusRadios CategoriaDadosPessoaisProfissaoEmpregoCarreira { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.profissaoEmprego.absenteismoDisciplina")]
        public StatusRadios CategoriaDadosPessoaisProfissaoEmpregoAbsenteismoDisciplina { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.profissaoEmprego.avaliacaoDesempenho")]
        public StatusRadios CategoriaDadosPessoaisProfissaoEmpregoAvaliacaoDesempenho { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.regVideoImgVoz.videoImagem")]
        public StatusRadios CategoriaDadosPessoaisRegVideoImgVozVideoImagem { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.regVideoImgVoz.imagemVigilancia")]
        public StatusRadios CategoriaDadosPessoaisRegVideoImgVozImagemVigilancia { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.regVideoImgVoz.voz")]
        public StatusRadios CategoriaDadosPessoaisRegVideoImgVozVoz { get; set; }

        [JsonProperty(PropertyName = "categoriaDadosPessoais.outros.outrosItems")]
        public StatusRadios CategoriaDadosPessoaisOutrosOutrosItems { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveis.origemRacialEtnica")]
        public StatusRadios CatDadosPessoaisSensiveisOrigemRacialEtnica { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveis.conviccaoReligiosa")]
        public StatusRadios CatDadosPessoaisSensiveisConviccaoReligiosa { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveis.opiniaoPolitica")]
        public StatusRadios CatDadosPessoaisSensiveisOpiniaoPolitica { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveis.filiacaoSindicato")]
        public StatusRadios CatDadosPessoaisSensiveisFiliacaoSindicato { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveis.filiacaoOrgReligiosa")]
        public StatusRadios CatDadosPessoaisSensiveisFiliacaoOrgReligiosa { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveis.filiacaoCrencaFilosofica")]
        public StatusRadios CatDadosPessoaisSensiveisFiliacaoCrencaFilosofica { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveis.filiacaoPreferenciaPolitica")]
        public StatusRadios CatDadosPessoaisSensiveisFiliacaoPreferenciaPolitica { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveis.saudeVidaSexual")]
        public StatusRadios CatDadosPessoaisSensiveisSaudeVidaSexual { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveis.geneticos")]
        public StatusRadios CatDadosPessoaisSensiveisGeneticos { get; set; }

        [JsonProperty(PropertyName = "catDadosPessoaisSensiveis.biometricos")]
        public StatusRadios CatDadosPessoaisSensiveisBiometricos { get; set; }


        public StatusRadios CompartilhamentoDadosPessoais { get; set; }
        public StatusRadios TransferenciaInternacional { get; set; }
        public StatusRadios ContratoServicosTITratamentoDados { get; set; }
    }
}