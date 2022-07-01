import {
    Associacoes,
    Caracteristicas,
    CaracteristicasPsicologicas,
    ComposicaoFamiliar,
    EducacaoTreinamento,
    emptyAssociacoes,
    emptyCaracteristicas,
    emptyCaracteristicasPsicologicas,
    emptyComposicaoFamiliar,
    emptyEducacaoTreinamento,
    emptyFinanceiros,
    emptyHabitos,
    emptyHabitosConsumo,
    emptyIdentificacao,
    emptyInteressesLazer,
    emptyOutros,
    emptyProcessoJudAdmCrim,
    emptyProfissaoEmprego,
    emptyRegVideoImgVoz,
    emptyResidenciais,
    Financeiros,
    Habitos,
    HabitosConsumo,
    Identificacao,
    InteressesLazer,
    Outros,
    ProcessoJudAdmCrim,
    ProfissaoEmprego,
    RegVideoImgVoz,
    Residenciais,
} from "./categoria-dados-pessoais.model";
import {
    hipotesesTratamento,
    statusRadios,
    tipoCategoriaTitulares,
    tipoCompartilhamentoDados,
    tipoFinalidadeCompartilhamento,
    tipoFontesRetencao,
    tipoMedidaSegurancaPrivacidade,
    tipoNivelCompartilhamento,
    tipoRiscoPrivacidade,
    tipoTempoRetencao,
} from "./enums.model";

export interface AgenteTratamento {
    nome: string;
    area?: string;
    telefone?: string;
    email?: string;
}

export const emptyAgenteTratamento = (
    nome?: string,
    area?: string,
    telefone?: string,
    email?: string
): AgenteTratamento => ({
    nome: nome || "",
    area: area || "",
    telefone: telefone || "",
    email: email || "",
});

export interface CategoriaDadosPessoaisSensiveis {
    origemRacialEtnica?: itemCategoriaDadosPessoais[];
    conviccaoReligiosa?: itemCategoriaDadosPessoais[];
    opiniaoPolitica?: itemCategoriaDadosPessoais[];
    filiacaoSindicato?: itemCategoriaDadosPessoais[];
    filiacaoOrgReligiosa?: itemCategoriaDadosPessoais[];
    filiacaoCrencaFilosofica?: itemCategoriaDadosPessoais[];
    filiacaoPreferenciaPolitica?: itemCategoriaDadosPessoais[];
    saudeVidaSexual?: itemCategoriaDadosPessoais[];
    geneticos?: itemCategoriaDadosPessoais[];
    biometricos?: itemCategoriaDadosPessoais[];
}

export const emptyCategoriaDadosPessoaisSensiveis =
    (): CategoriaDadosPessoaisSensiveis => ({
        origemRacialEtnica: [],
        conviccaoReligiosa: [],
        opiniaoPolitica: [],
        filiacaoSindicato: [],
        filiacaoOrgReligiosa: [],
        filiacaoCrencaFilosofica: [],
        filiacaoPreferenciaPolitica: [],
        saudeVidaSexual: [],
        geneticos: [],
        biometricos: [],
    });

export interface CategoriaDadosPessoais {
    identificacao: Identificacao;
    financeiros: Financeiros;
    caracteristicas: Caracteristicas;
    habitos: Habitos;
    caracteristicasPsicologicas: CaracteristicasPsicologicas;
    composicaoFamiliar: ComposicaoFamiliar;
    interessesLazer: InteressesLazer;
    associacoes: Associacoes;
    processoJudAdmCrim: ProcessoJudAdmCrim;
    habitosConsumo: HabitosConsumo;
    residenciais: Residenciais;
    educacaoTreinamento: EducacaoTreinamento;
    profissaoEmprego: ProfissaoEmprego;
    regVideoImgVoz: RegVideoImgVoz;
    outros: Outros;
}

export const emptyCategoriaDadosPessoais = (): CategoriaDadosPessoais => ({
    identificacao: emptyIdentificacao(),
    financeiros: emptyFinanceiros(),
    caracteristicas: emptyCaracteristicas(),
    habitos: emptyHabitos(),
    caracteristicasPsicologicas: emptyCaracteristicasPsicologicas(),
    composicaoFamiliar: emptyComposicaoFamiliar(),
    interessesLazer: emptyInteressesLazer(),
    associacoes: emptyAssociacoes(),
    processoJudAdmCrim: emptyProcessoJudAdmCrim(),
    habitosConsumo: emptyHabitosConsumo(),
    residenciais: emptyResidenciais(),
    educacaoTreinamento: emptyEducacaoTreinamento(),
    profissaoEmprego: emptyProfissaoEmprego(),
    regVideoImgVoz: emptyRegVideoImgVoz(),
    outros: emptyOutros(),
});

export interface CategoriaTitulares {
    categorias: itemCategoriaTitulares[];
    criancasAdolescentes: itemCategoriaTitularesExtra;
    outrosGruposVulneraveis: itemCategoriaTitularesExtra;
}

export const emptyCategoriaTitulares = (): CategoriaTitulares => ({
    categorias: [emptyItemCategoriaTitulares()],
    criancasAdolescentes: emptyItemCategoriaTitularesExtra(),
    outrosGruposVulneraveis: emptyItemCategoriaTitularesExtra(),
});

export interface FasesCicloTratamento {
    coleta: boolean;
    retencao: boolean;
    processamento: boolean;
    compartilhamento: boolean;
    eliminacao: boolean;
}

export const emptyFasesCicloTratamento = (): FasesCicloTratamento => ({
    coleta: false,
    retencao: false,
    processamento: false,
    compartilhamento: false,
    eliminacao: false,
});

export interface FinalidadeTratamento {
    hipoteseTratamento: { value: hipotesesTratamento };
    descricaoFinalidade: string;
    previsaoLegal: string;
    resultadosTitular: string;
    beneficiosEsperados: string;
}

export const emptyFinalidadeTratamento = (): FinalidadeTratamento => ({
    hipoteseTratamento: { value: hipotesesTratamento.na },
    descricaoFinalidade:
        "Atendimento de finalidade pública, na persecução do interesse público, com o objetivo de executar as competências legais ou cumprir as atribuições legais do serviço público.",
    previsaoLegal: "",
    resultadosTitular: "",
    beneficiosEsperados: "",
});

export interface itemCategoriaDadosPessoais {
    descricao: string;
    tempoRetencao: { value: tipoTempoRetencao };
    fonteRetencao: { value: tipoFontesRetencao };
    localArmazenamento: string;
}

export const emptyItemCategoriaDadosPessoais =
    (): itemCategoriaDadosPessoais => ({
        descricao: "",
        tempoRetencao: { value: tipoTempoRetencao.na },
        fonteRetencao: { value: tipoFontesRetencao.na },
        localArmazenamento: "",
    });

interface itemCategoriaTitulares {
    tipoCategoria: { value: tipoCategoriaTitulares };
    descricao: string;
}

export const emptyItemCategoriaTitulares = (): itemCategoriaTitulares => ({
    tipoCategoria: { value: tipoCategoriaTitulares.na },
    descricao: "",
});

export interface itemCategoriaTitularesExtra {
    trataDados: string;
    descricaoDados: string;
}

export const emptyItemCategoriaTitularesExtra =
    (): itemCategoriaTitularesExtra => ({
        trataDados: "NÃO",
        descricaoDados: "",
    });

export interface itemCompartilhamentoDados {
    nomeInstituicao: string;
    tipoCompDados: { value: tipoCompartilhamentoDados };
    nivelCompartilhamento: { value: tipoNivelCompartilhamento };
    descricaoDadosCompartilhados: string;
    finalidadeComp: { value: tipoFinalidadeCompartilhamento };
    descricaoFinalidadeComp: string;
}

export const emptyItemCompatilhamentoDados = (): itemCompartilhamentoDados => ({
    nomeInstituicao: "",
    tipoCompDados: { value: tipoCompartilhamentoDados.na },
    nivelCompartilhamento: { value: tipoNivelCompartilhamento.na },
    descricaoDadosCompartilhados: "",
    finalidadeComp: { value: tipoFinalidadeCompartilhamento.na },
    descricaoFinalidadeComp: "",
});

export interface itemContratoTI {
    numeroContrato: string;
    numeroProcessoContratacao: string;
    objetoContrato: string;
    emailGestorContrato: string;
}

export const emptyItemContratoTI = (): itemContratoTI => ({
    numeroContrato: "",
    numeroProcessoContratacao: "",
    objetoContrato: "",
    emailGestorContrato: "",
});

export interface itemMedidasSegurancaPrivacidade {
    tipo: { value: tipoMedidaSegurancaPrivacidade };
    descricao: string;
}

export const emptyItemMedidaSegurancaPrivacidade =
    (): itemMedidasSegurancaPrivacidade => ({
        tipo: { value: tipoMedidaSegurancaPrivacidade.na },
        descricao: "",
    });

export interface itemObservacoesProcesso {
    descricaoObs: string;
}

export const emptyItemObservacoesProcesso = (): itemObservacoesProcesso => ({
    descricaoObs: "",
});

export interface itemRiscoPrivacidade {
    tipoRisco: { value: tipoRiscoPrivacidade };
    observacoes: string;
}

export const emptyItemRiscoPrivacidade = (): itemRiscoPrivacidade => ({
    tipoRisco: { value: tipoRiscoPrivacidade.na },
    observacoes: "",
});

export interface itemTransferenciaInternacional {
    nomeOrganizacao: string;
    pais: string;
    dadosTransferidos: string;
    tipoGarantia: string;
}

export const emptyItemTransferenciaInternacional =
    (): itemTransferenciaInternacional => ({
        nomeOrganizacao: "",
        pais: "",
        dadosTransferidos: "",
        tipoGarantia: "",
    });

export interface radiosClicked {
    hasOperador: statusRadios;
    fasesCicloTratamento: statusRadios;
    categoriaDadosPessoaisidentificacaoidPessoal: statusRadios;
    categoriaDadosPessoaisidentificacaoidGov: statusRadios;
    categoriaDadosPessoaisidentificacaoidEletronica: statusRadios;
    categoriaDadosPessoaisidentificacaolocEletronica: statusRadios;
    categoriaDadosPessoaisfinanceirosidFin: statusRadios;
    categoriaDadosPessoaisfinanceirosrecursosFin: statusRadios;
    categoriaDadosPessoaisfinanceirosdividasDespesas: statusRadios;
    categoriaDadosPessoaisfinanceirossolvencia: statusRadios;
    categoriaDadosPessoaisfinanceirosemprestimosHipotecaCredito: statusRadios;
    categoriaDadosPessoaisfinanceirosassistenciaFin: statusRadios;
    categoriaDadosPessoaisfinanceirosapoliceSeguro: statusRadios;
    categoriaDadosPessoaisfinanceirosplanoPensao: statusRadios;
    categoriaDadosPessoaisfinanceirostransacaoFin: statusRadios;
    categoriaDadosPessoaisfinanceiroscompensacao: statusRadios;
    categoriaDadosPessoaisfinanceirosatividadeProfissional: statusRadios;
    categoriaDadosPessoaisfinanceirosacordosAjustes: statusRadios;
    categoriaDadosPessoaisfinanceirosautorizacoesConsentimentos: statusRadios;
    categoriaDadosPessoaiscaracteristicasdetalhesPessoais: statusRadios;
    categoriaDadosPessoaiscaracteristicasdetalhesMilitares: statusRadios;
    categoriaDadosPessoaiscaracteristicassituacaoImigracao: statusRadios;
    categoriaDadosPessoaiscaracteristicasdescricaoFisica: statusRadios;
    categoriaDadosPessoaishabitoshabitosPessoais: statusRadios;
    categoriaDadosPessoaishabitosestiloVida: statusRadios;
    categoriaDadosPessoaishabitosviagensDeslocamento: statusRadios;
    categoriaDadosPessoaishabitoscontatosSociais: statusRadios;
    categoriaDadosPessoaishabitosposses: statusRadios;
    categoriaDadosPessoaishabitosdenunciasIncAcidentes: statusRadios;
    categoriaDadosPessoaishabitosdistincoes: statusRadios;
    categoriaDadosPessoaishabitosusoMidia: statusRadios;
    categoriaDadosPessoaiscaracteristicasPsicologicasdescricaoPsi: statusRadios;
    categoriaDadosPessoaiscomposicaoFamiliarcasamentoCoabitacao: statusRadios;
    categoriaDadosPessoaiscomposicaoFamiliarhistoricoConjugal: statusRadios;
    categoriaDadosPessoaiscomposicaoFamiliarmembrosFamilia: statusRadios;
    categoriaDadosPessoaisinteressesLazeratividadesInteressesLaz: statusRadios;
    categoriaDadosPessoaisassociacoesoutrasAssNaoSensiveis: statusRadios;
    categoriaDadosPessoaisprocessoJudAdmCrimsuspeitas: statusRadios;
    categoriaDadosPessoaisprocessoJudAdmCrimcondenacoesSentencas: statusRadios;
    categoriaDadosPessoaisprocessoJudAdmCrimacoesJud: statusRadios;
    categoriaDadosPessoaisprocessoJudAdmCrimpenalidadesAdm: statusRadios;
    categoriaDadosPessoaishabitosConsumodadosBensServicos: statusRadios;
    categoriaDadosPessoaisresidenciaisdadosResidencia: statusRadios;
    categoriaDadosPessoaiseducacaoTreinamentoacademicosEscolares: statusRadios;
    categoriaDadosPessoaiseducacaoTreinamentoregistroFinanceiro: statusRadios;
    categoriaDadosPessoaiseducacaoTreinamentoqualificacaoExperienciaProf: statusRadios;
    categoriaDadosPessoaisprofissaoEmpregoempregoAtual: statusRadios;
    categoriaDadosPessoaisprofissaoEmpregorecrutamento: statusRadios;
    categoriaDadosPessoaisprofissaoEmpregorescisao: statusRadios;
    categoriaDadosPessoaisprofissaoEmpregocarreira: statusRadios;
    categoriaDadosPessoaisprofissaoEmpregoabsenteismoDisciplina: statusRadios;
    categoriaDadosPessoaisprofissaoEmpregoavaliacaoDesempenho: statusRadios;
    categoriaDadosPessoaisregVideoImgVozvideoImagem: statusRadios;
    categoriaDadosPessoaisregVideoImgVozimagemVigilancia: statusRadios;
    categoriaDadosPessoaisregVideoImgVozvoz: statusRadios;
    categoriaDadosPessoaisoutrosoutrosItems: statusRadios;
    catDadosPessoaisSensiveisorigemRacialEtnica: statusRadios;
    catDadosPessoaisSensiveisconviccaoReligiosa: statusRadios;
    catDadosPessoaisSensiveisopiniaoPolitica: statusRadios;
    catDadosPessoaisSensiveisfiliacaoSindicato: statusRadios;
    catDadosPessoaisSensiveisfiliacaoOrgReligiosa: statusRadios;
    catDadosPessoaisSensiveisfiliacaoCrencaFilosofica: statusRadios;
    catDadosPessoaisSensiveisfiliacaoPreferenciaPolitica: statusRadios;
    catDadosPessoaisSensiveissaudeVidaSexual: statusRadios;
    catDadosPessoaisSensiveisgeneticos: statusRadios;
    catDadosPessoaisSensiveisbiometricos: statusRadios;
    compartilhamentoDadosPessoais: statusRadios;
    transferenciaInternacional: statusRadios;
    contratoServicosTITratamentoDados: statusRadios;
}

export const emptyRadiosClicked = (): radiosClicked => ({
    hasOperador: statusRadios.INVALID,
    fasesCicloTratamento: statusRadios.INVALID,
    categoriaDadosPessoaisidentificacaoidPessoal: statusRadios.INVALID,
    categoriaDadosPessoaisidentificacaoidGov: statusRadios.INVALID,
    categoriaDadosPessoaisidentificacaoidEletronica: statusRadios.INVALID,
    categoriaDadosPessoaisidentificacaolocEletronica: statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirosidFin: statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirosrecursosFin: statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirosdividasDespesas: statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirossolvencia: statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirosemprestimosHipotecaCredito:
        statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirosassistenciaFin: statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirosapoliceSeguro: statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirosplanoPensao: statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirostransacaoFin: statusRadios.INVALID,
    categoriaDadosPessoaisfinanceiroscompensacao: statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirosatividadeProfissional:
        statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirosacordosAjustes: statusRadios.INVALID,
    categoriaDadosPessoaisfinanceirosautorizacoesConsentimentos:
        statusRadios.INVALID,
    categoriaDadosPessoaiscaracteristicasdetalhesPessoais: statusRadios.INVALID,
    categoriaDadosPessoaiscaracteristicasdetalhesMilitares:
        statusRadios.INVALID,
    categoriaDadosPessoaiscaracteristicassituacaoImigracao:
        statusRadios.INVALID,
    categoriaDadosPessoaiscaracteristicasdescricaoFisica: statusRadios.INVALID,
    categoriaDadosPessoaishabitoshabitosPessoais: statusRadios.INVALID,
    categoriaDadosPessoaishabitosestiloVida: statusRadios.INVALID,
    categoriaDadosPessoaishabitosviagensDeslocamento: statusRadios.INVALID,
    categoriaDadosPessoaishabitoscontatosSociais: statusRadios.INVALID,
    categoriaDadosPessoaishabitosposses: statusRadios.INVALID,
    categoriaDadosPessoaishabitosdenunciasIncAcidentes: statusRadios.INVALID,
    categoriaDadosPessoaishabitosdistincoes: statusRadios.INVALID,
    categoriaDadosPessoaishabitosusoMidia: statusRadios.INVALID,
    categoriaDadosPessoaiscaracteristicasPsicologicasdescricaoPsi:
        statusRadios.INVALID,
    categoriaDadosPessoaiscomposicaoFamiliarcasamentoCoabitacao:
        statusRadios.INVALID,
    categoriaDadosPessoaiscomposicaoFamiliarhistoricoConjugal:
        statusRadios.INVALID,
    categoriaDadosPessoaiscomposicaoFamiliarmembrosFamilia:
        statusRadios.INVALID,
    categoriaDadosPessoaisinteressesLazeratividadesInteressesLaz:
        statusRadios.INVALID,
    categoriaDadosPessoaisassociacoesoutrasAssNaoSensiveis:
        statusRadios.INVALID,
    categoriaDadosPessoaisprocessoJudAdmCrimsuspeitas: statusRadios.INVALID,
    categoriaDadosPessoaisprocessoJudAdmCrimcondenacoesSentencas:
        statusRadios.INVALID,
    categoriaDadosPessoaisprocessoJudAdmCrimacoesJud: statusRadios.INVALID,
    categoriaDadosPessoaisprocessoJudAdmCrimpenalidadesAdm:
        statusRadios.INVALID,
    categoriaDadosPessoaishabitosConsumodadosBensServicos: statusRadios.INVALID,
    categoriaDadosPessoaisresidenciaisdadosResidencia: statusRadios.INVALID,
    categoriaDadosPessoaiseducacaoTreinamentoacademicosEscolares:
        statusRadios.INVALID,
    categoriaDadosPessoaiseducacaoTreinamentoregistroFinanceiro:
        statusRadios.INVALID,
    categoriaDadosPessoaiseducacaoTreinamentoqualificacaoExperienciaProf:
        statusRadios.INVALID,
    categoriaDadosPessoaisprofissaoEmpregoempregoAtual: statusRadios.INVALID,
    categoriaDadosPessoaisprofissaoEmpregorecrutamento: statusRadios.INVALID,
    categoriaDadosPessoaisprofissaoEmpregorescisao: statusRadios.INVALID,
    categoriaDadosPessoaisprofissaoEmpregocarreira: statusRadios.INVALID,
    categoriaDadosPessoaisprofissaoEmpregoabsenteismoDisciplina:
        statusRadios.INVALID,
    categoriaDadosPessoaisprofissaoEmpregoavaliacaoDesempenho:
        statusRadios.INVALID,
    categoriaDadosPessoaisregVideoImgVozvideoImagem: statusRadios.INVALID,
    categoriaDadosPessoaisregVideoImgVozimagemVigilancia: statusRadios.INVALID,
    categoriaDadosPessoaisregVideoImgVozvoz: statusRadios.INVALID,
    categoriaDadosPessoaisoutrosoutrosItems: statusRadios.INVALID,
    catDadosPessoaisSensiveisorigemRacialEtnica: statusRadios.INVALID,
    catDadosPessoaisSensiveisconviccaoReligiosa: statusRadios.INVALID,
    catDadosPessoaisSensiveisopiniaoPolitica: statusRadios.INVALID,
    catDadosPessoaisSensiveisfiliacaoSindicato: statusRadios.INVALID,
    catDadosPessoaisSensiveisfiliacaoOrgReligiosa: statusRadios.INVALID,
    catDadosPessoaisSensiveisfiliacaoCrencaFilosofica: statusRadios.INVALID,
    catDadosPessoaisSensiveisfiliacaoPreferenciaPolitica: statusRadios.INVALID,
    catDadosPessoaisSensiveissaudeVidaSexual: statusRadios.INVALID,
    catDadosPessoaisSensiveisgeneticos: statusRadios.INVALID,
    catDadosPessoaisSensiveisbiometricos: statusRadios.INVALID,
    compartilhamentoDadosPessoais: statusRadios.INVALID,
    transferenciaInternacional: statusRadios.INVALID,
    contratoServicosTITratamentoDados: statusRadios.INVALID,
});
