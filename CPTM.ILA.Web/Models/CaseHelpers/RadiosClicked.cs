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


        //    fasesCicloTratamento: statusRadios;
        //"categoriaDadosPessoais.identificacao.idPessoal": statusRadios;
        //"categoriaDadosPessoais.identificacao.idGov": statusRadios;
        //"categoriaDadosPessoais.identificacao.idEletronica": statusRadios;
        //"categoriaDadosPessoais.identificacao.locEletronica": statusRadios;
        //"categoriaDadosPessoais.financeiros.idFin": statusRadios;
        //"categoriaDadosPessoais.financeiros.recursosFin": statusRadios;
        //"categoriaDadosPessoais.financeiros.dividasDespesas": statusRadios;
        //"categoriaDadosPessoais.financeiros.solvencia": statusRadios;
        //"categoriaDadosPessoais.financeiros.emprestimosHipotecaCredito": statusRadios;
        //"categoriaDadosPessoais.financeiros.assistenciaFin": statusRadios;
        //"categoriaDadosPessoais.financeiros.apoliceSeguro": statusRadios;
        //"categoriaDadosPessoais.financeiros.planoPensao": statusRadios;
        //"categoriaDadosPessoais.financeiros.transacaoFin": statusRadios;
        //"categoriaDadosPessoais.financeiros.compensacao": statusRadios;
        //"categoriaDadosPessoais.financeiros.atividadeProfissional": statusRadios;
        //"categoriaDadosPessoais.financeiros.acordosAjustes": statusRadios;
        //"categoriaDadosPessoais.financeiros.autorizacoesConsentimentos": statusRadios;
        //"categoriaDadosPessoais.caracteristicas.detalhesPessoais": statusRadios;
        //"categoriaDadosPessoais.caracteristicas.detalhesMilitares": statusRadios;
        //"categoriaDadosPessoais.caracteristicas.situacaoImigracao": statusRadios;
        //"categoriaDadosPessoais.caracteristicas.descricaoFisica": statusRadios;
        //"categoriaDadosPessoais.habitos.habitosPessoais": statusRadios;
        //"categoriaDadosPessoais.habitos.estiloVida": statusRadios;
        //"categoriaDadosPessoais.habitos.viagensDeslocamento": statusRadios;
        //"categoriaDadosPessoais.habitos.contatosSociais": statusRadios;
        //"categoriaDadosPessoais.habitos.posses": statusRadios;
        //"categoriaDadosPessoais.habitos.denunciasIncAcidentes": statusRadios;
        //"categoriaDadosPessoais.habitos.distincoes": statusRadios;
        //"categoriaDadosPessoais.habitos.usoMidia": statusRadios;
        //"categoriaDadosPessoais.caracteristicasPsicologicas.descricaoPsi": statusRadios;
        //"categoriaDadosPessoais.composicaoFamiliar.casamentoCoabitacao": statusRadios;
        //"categoriaDadosPessoais.composicaoFamiliar.historicoConjugal": statusRadios;
        //"categoriaDadosPessoais.composicaoFamiliar.membrosFamilia": statusRadios;
        //"categoriaDadosPessoais.interessesLazer.atividadesInteressesLaz": statusRadios;
        //"categoriaDadosPessoais.associacoes.outrasAssNaoSensiveis": statusRadios;
        //"categoriaDadosPessoais.processoJudAdmCrim.suspeitas": statusRadios;
        //"categoriaDadosPessoais.processoJudAdmCrim.condenacoesSentencas": statusRadios;
        //"categoriaDadosPessoais.processoJudAdmCrim.acoesJud": statusRadios;
        //"categoriaDadosPessoais.processoJudAdmCrim.penalidadesAdm": statusRadios;
        //"categoriaDadosPessoais.habitosConsumo.dadosBensServicos": statusRadios;
        //"categoriaDadosPessoais.residenciais.dadosResidencia": statusRadios;
        //"categoriaDadosPessoais.educacaoTreinamento.academicosEscolares": statusRadios;
        //"categoriaDadosPessoais.educacaoTreinamento.registroFinanceiro": statusRadios;
        //"categoriaDadosPessoais.educacaoTreinamento.qualificacaoExperienciaProf": statusRadios;
        //"categoriaDadosPessoais.profissaoEmprego.empregoAtual": statusRadios;
        //"categoriaDadosPessoais.profissaoEmprego.recrutamento": statusRadios;
        //"categoriaDadosPessoais.profissaoEmprego.rescisao": statusRadios;
        //"categoriaDadosPessoais.profissaoEmprego.carreira": statusRadios;
        //"categoriaDadosPessoais.profissaoEmprego.absenteismoDisciplina": statusRadios;
        //"categoriaDadosPessoais.profissaoEmprego.avaliacaoDesempenho": statusRadios;
        //"categoriaDadosPessoais.regVideoImgVoz.videoImagem": statusRadios;
        //"categoriaDadosPessoais.regVideoImgVoz.imagemVigilancia": statusRadios;
        //"categoriaDadosPessoais.regVideoImgVoz.voz": statusRadios;
        //"categoriaDadosPessoais.outros.outrosItems": statusRadios;
        //"catDadosPessoaisSensiveis.origemRacialEtnica": statusRadios;
        //"catDadosPessoaisSensiveis.conviccaoReligiosa": statusRadios;
        //"catDadosPessoaisSensiveis.opiniaoPolitica": statusRadios;
        //"catDadosPessoaisSensiveis.filiacaoSindicato": statusRadios;
        //"catDadosPessoaisSensiveis.filiacaoOrgReligiosa": statusRadios;
        //"catDadosPessoaisSensiveis.filiacaoCrencaFilosofica": statusRadios;
        //"catDadosPessoaisSensiveis.filiacaoPreferenciaPolitica": statusRadios;
        //"catDadosPessoaisSensiveis.saudeVidaSexual": statusRadios;
        //"catDadosPessoaisSensiveis.geneticos": statusRadios;
        //"catDadosPessoaisSensiveis.biometricos": statusRadios;
        //compartilhamentoDadosPessoais: statusRadios;
        //transferenciaInternacional: statusRadios;
        //contratoServicosTITratamentoDados: statusRadios;
    }
}