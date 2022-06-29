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
    fasesCicloTratamento: statusRadios;
    "categoriaDadosPessoais.identificacao.idPessoal": statusRadios;
    "categoriaDadosPessoais.identificacao.idGov": statusRadios;
    "categoriaDadosPessoais.identificacao.idEletronica": statusRadios;
    "categoriaDadosPessoais.identificacao.locEletronica": statusRadios;
    "categoriaDadosPessoais.financeiros.idFin": statusRadios;
    "categoriaDadosPessoais.financeiros.recursosFin": statusRadios;
    "categoriaDadosPessoais.financeiros.dividasDespesas": statusRadios;
    "categoriaDadosPessoais.financeiros.solvencia": statusRadios;
    "categoriaDadosPessoais.financeiros.emprestimosHipotecaCredito": statusRadios;
    "categoriaDadosPessoais.financeiros.assistenciaFin": statusRadios;
    "categoriaDadosPessoais.financeiros.apoliceSeguro": statusRadios;
    "categoriaDadosPessoais.financeiros.planoPensao": statusRadios;
    "categoriaDadosPessoais.financeiros.transacaoFin": statusRadios;
    "categoriaDadosPessoais.financeiros.compensacao": statusRadios;
    "categoriaDadosPessoais.financeiros.atividadeProfissional": statusRadios;
    "categoriaDadosPessoais.financeiros.acordosAjustes": statusRadios;
    "categoriaDadosPessoais.financeiros.autorizacoesConsentimentos": statusRadios;
    "categoriaDadosPessoais.caracteristicas.detalhesPessoais": statusRadios;
    "categoriaDadosPessoais.caracteristicas.detalhesMilitares": statusRadios;
    "categoriaDadosPessoais.caracteristicas.situacaoImigracao": statusRadios;
    "categoriaDadosPessoais.caracteristicas.descricaoFisica": statusRadios;
    "categoriaDadosPessoais.habitos.habitosPessoais": statusRadios;
    "categoriaDadosPessoais.habitos.estiloVida": statusRadios;
    "categoriaDadosPessoais.habitos.viagensDeslocamento": statusRadios;
    "categoriaDadosPessoais.habitos.contatosSociais": statusRadios;
    "categoriaDadosPessoais.habitos.posses": statusRadios;
    "categoriaDadosPessoais.habitos.denunciasIncAcidentes": statusRadios;
    "categoriaDadosPessoais.habitos.distincoes": statusRadios;
    "categoriaDadosPessoais.habitos.usoMidia": statusRadios;
    "categoriaDadosPessoais.caracteristicasPsicologicas.descricaoPsi": statusRadios;
    "categoriaDadosPessoais.composicaoFamiliar.casamentoCoabitacao": statusRadios;
    "categoriaDadosPessoais.composicaoFamiliar.historicoConjugal": statusRadios;
    "categoriaDadosPessoais.composicaoFamiliar.membrosFamilia": statusRadios;
    "categoriaDadosPessoais.interessesLazer.atividadesInteressesLaz": statusRadios;
    "categoriaDadosPessoais.associacoes.outrasAssNaoSensiveis": statusRadios;
    "categoriaDadosPessoais.processoJudAdmCrim.suspeitas": statusRadios;
    "categoriaDadosPessoais.processoJudAdmCrim.condenacoesSentencas": statusRadios;
    "categoriaDadosPessoais.processoJudAdmCrim.acoesJud": statusRadios;
    "categoriaDadosPessoais.processoJudAdmCrim.penalidadesAdm": statusRadios;
    "categoriaDadosPessoais.habitosConsumo.dadosBensServicos": statusRadios;
    "categoriaDadosPessoais.residenciais.dadosResidencia": statusRadios;
    "categoriaDadosPessoais.educacaoTreinamento.academicosEscolares": statusRadios;
    "categoriaDadosPessoais.educacaoTreinamento.registroFinanceiro": statusRadios;
    "categoriaDadosPessoais.educacaoTreinamento.qualificacaoExperienciaProf": statusRadios;
    "categoriaDadosPessoais.profissaoEmprego.empregoAtual": statusRadios;
    "categoriaDadosPessoais.profissaoEmprego.recrutamento": statusRadios;
    "categoriaDadosPessoais.profissaoEmprego.rescisao": statusRadios;
    "categoriaDadosPessoais.profissaoEmprego.carreira": statusRadios;
    "categoriaDadosPessoais.profissaoEmprego.absenteismoDisciplina": statusRadios;
    "categoriaDadosPessoais.profissaoEmprego.avaliacaoDesempenho": statusRadios;
    "categoriaDadosPessoais.regVideoImgVoz.videoImagem": statusRadios;
    "categoriaDadosPessoais.regVideoImgVoz.imagemVigilancia": statusRadios;
    "categoriaDadosPessoais.regVideoImgVoz.voz": statusRadios;
    "categoriaDadosPessoais.outros.outrosItems": statusRadios;
    "catDadosPessoaisSensiveis.origemRacialEtnica": statusRadios;
    "catDadosPessoaisSensiveis.conviccaoReligiosa": statusRadios;
    "catDadosPessoaisSensiveis.opiniaoPolitica": statusRadios;
    "catDadosPessoaisSensiveis.filiacaoSindicato": statusRadios;
    "catDadosPessoaisSensiveis.filiacaoOrgReligiosa": statusRadios;
    "catDadosPessoaisSensiveis.filiacaoCrencaFilosofica": statusRadios;
    "catDadosPessoaisSensiveis.filiacaoPreferenciaPolitica": statusRadios;
    "catDadosPessoaisSensiveis.saudeVidaSexual": statusRadios;
    "catDadosPessoaisSensiveis.geneticos": statusRadios;
    "catDadosPessoaisSensiveis.biometricos": statusRadios;
    compartilhamentoDadosPessoais: statusRadios;
    transferenciaInternacional: statusRadios;
    contratoServicosTITratamentoDados: statusRadios;
}

export const emptyRadiosClicked = (): radiosClicked => ({
    fasesCicloTratamento: statusRadios.INVALID,
    "categoriaDadosPessoais.identificacao.idPessoal": statusRadios.NÃO,
    "categoriaDadosPessoais.identificacao.idGov": statusRadios.INVALID,
    "categoriaDadosPessoais.identificacao.idEletronica": statusRadios.INVALID,
    "categoriaDadosPessoais.identificacao.locEletronica": statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.idFin": statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.recursosFin": statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.dividasDespesas": statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.solvencia": statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.emprestimosHipotecaCredito":
        statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.assistenciaFin": statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.apoliceSeguro": statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.planoPensao": statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.transacaoFin": statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.compensacao": statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.atividadeProfissional":
        statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.acordosAjustes": statusRadios.INVALID,
    "categoriaDadosPessoais.financeiros.autorizacoesConsentimentos":
        statusRadios.INVALID,
    "categoriaDadosPessoais.caracteristicas.detalhesPessoais":
        statusRadios.INVALID,
    "categoriaDadosPessoais.caracteristicas.detalhesMilitares":
        statusRadios.INVALID,
    "categoriaDadosPessoais.caracteristicas.situacaoImigracao":
        statusRadios.INVALID,
    "categoriaDadosPessoais.caracteristicas.descricaoFisica":
        statusRadios.INVALID,
    "categoriaDadosPessoais.habitos.habitosPessoais": statusRadios.INVALID,
    "categoriaDadosPessoais.habitos.estiloVida": statusRadios.INVALID,
    "categoriaDadosPessoais.habitos.viagensDeslocamento": statusRadios.INVALID,
    "categoriaDadosPessoais.habitos.contatosSociais": statusRadios.INVALID,
    "categoriaDadosPessoais.habitos.posses": statusRadios.INVALID,
    "categoriaDadosPessoais.habitos.denunciasIncAcidentes":
        statusRadios.INVALID,
    "categoriaDadosPessoais.habitos.distincoes": statusRadios.INVALID,
    "categoriaDadosPessoais.habitos.usoMidia": statusRadios.INVALID,
    "categoriaDadosPessoais.caracteristicasPsicologicas.descricaoPsi":
        statusRadios.INVALID,
    "categoriaDadosPessoais.composicaoFamiliar.casamentoCoabitacao":
        statusRadios.INVALID,
    "categoriaDadosPessoais.composicaoFamiliar.historicoConjugal":
        statusRadios.INVALID,
    "categoriaDadosPessoais.composicaoFamiliar.membrosFamilia":
        statusRadios.INVALID,
    "categoriaDadosPessoais.interessesLazer.atividadesInteressesLaz":
        statusRadios.INVALID,
    "categoriaDadosPessoais.associacoes.outrasAssNaoSensiveis":
        statusRadios.INVALID,
    "categoriaDadosPessoais.processoJudAdmCrim.suspeitas": statusRadios.INVALID,
    "categoriaDadosPessoais.processoJudAdmCrim.condenacoesSentencas":
        statusRadios.INVALID,
    "categoriaDadosPessoais.processoJudAdmCrim.acoesJud": statusRadios.INVALID,
    "categoriaDadosPessoais.processoJudAdmCrim.penalidadesAdm":
        statusRadios.INVALID,
    "categoriaDadosPessoais.habitosConsumo.dadosBensServicos":
        statusRadios.INVALID,
    "categoriaDadosPessoais.residenciais.dadosResidencia": statusRadios.INVALID,
    "categoriaDadosPessoais.educacaoTreinamento.academicosEscolares":
        statusRadios.INVALID,
    "categoriaDadosPessoais.educacaoTreinamento.registroFinanceiro":
        statusRadios.INVALID,
    "categoriaDadosPessoais.educacaoTreinamento.qualificacaoExperienciaProf":
        statusRadios.INVALID,
    "categoriaDadosPessoais.profissaoEmprego.empregoAtual":
        statusRadios.INVALID,
    "categoriaDadosPessoais.profissaoEmprego.recrutamento":
        statusRadios.INVALID,
    "categoriaDadosPessoais.profissaoEmprego.rescisao": statusRadios.INVALID,
    "categoriaDadosPessoais.profissaoEmprego.carreira": statusRadios.INVALID,
    "categoriaDadosPessoais.profissaoEmprego.absenteismoDisciplina":
        statusRadios.INVALID,
    "categoriaDadosPessoais.profissaoEmprego.avaliacaoDesempenho":
        statusRadios.INVALID,
    "categoriaDadosPessoais.regVideoImgVoz.videoImagem": statusRadios.INVALID,
    "categoriaDadosPessoais.regVideoImgVoz.imagemVigilancia":
        statusRadios.INVALID,
    "categoriaDadosPessoais.regVideoImgVoz.voz": statusRadios.INVALID,
    "categoriaDadosPessoais.outros.outrosItems": statusRadios.INVALID,
    "catDadosPessoaisSensiveis.origemRacialEtnica": statusRadios.INVALID,
    "catDadosPessoaisSensiveis.conviccaoReligiosa": statusRadios.INVALID,
    "catDadosPessoaisSensiveis.opiniaoPolitica": statusRadios.INVALID,
    "catDadosPessoaisSensiveis.filiacaoSindicato": statusRadios.INVALID,
    "catDadosPessoaisSensiveis.filiacaoOrgReligiosa": statusRadios.INVALID,
    "catDadosPessoaisSensiveis.filiacaoCrencaFilosofica": statusRadios.INVALID,
    "catDadosPessoaisSensiveis.filiacaoPreferenciaPolitica":
        statusRadios.INVALID,
    "catDadosPessoaisSensiveis.saudeVidaSexual": statusRadios.INVALID,
    "catDadosPessoaisSensiveis.geneticos": statusRadios.INVALID,
    "catDadosPessoaisSensiveis.biometricos": statusRadios.INVALID,
    compartilhamentoDadosPessoais: statusRadios.INVALID,
    transferenciaInternacional: statusRadios.INVALID,
    contratoServicosTITratamentoDados: statusRadios.INVALID,
});
