﻿using System;
using System.Collections.Generic;
using System.Globalization;
using CPTM.ILA.Web.Models.AccessControl;
using CPTM.ILA.Web.Models.CaseHelpers;

namespace CPTM.ILA.Web.Models
{
    public class Case
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Area { get; set; }
        public DateTime DataCriacao { get; set; }
        public DateTime DataAtualizacao { get; set; }
        public Group Criador { get; set; }
        public bool Aprovado { get; set; }

        public bool DadosPessoaisSensiveis { get; set; }
        public AgenteTratamento Controlador { get; set; }
        public AgenteTratamento Encarregado { get; set; }
        public AgenteTratamento ExtensaoEncarregado { get; set; }
        public AgenteTratamento AreaTratamentoDados { get; set; }
        public AgenteTratamento Operador { get; set; }
        public FasesCicloTratamento FasesCicloTratamento { get; set; }
        public string DescricaoFluxoTratamento { get; set; }
        public string AbrangenciaGeografica { get; set; }
        public string FonteDados { get; set; }
        public FinalidadeTratamento FinalidadeTratamento { get; set; }
        public CategoriaDadosPessoais CategoriaDadosPessoais { get; set; }
        public CategoriaDadosPessoaisSensiveis CategoriaDadosPessoaisSensiveis { get; set; }
        public string FrequenciaTratamento { get; set; }
        public string QuantidadeDadosTratados { get; set; }
        public CategoriasTitulares CategoriasTitulares { get; set; }
        public ICollection<ItemCompartilhamentoDados> CompartilhamentoDadosPessoais { get; set; }
        public ICollection<ItemMedidaSegurancaPrivacidade> MedidasSegurancaPrivacidade { get; set; }
        public ICollection<ItemTransferenciaInternacional> TransferenciaInternacional { get; set; }
        public ICollection<ItemContratoTi> ContratoServicosTiTratamentoDados { get; set; }
        public ICollection<ItemRiscoPrivacidade> RiscosPrivacidade { get; set; }
        public ICollection<ItemObservacoesProcesso> ObservacoesProcesso { get; set; }

        public CaseListItem ReduceToListItem(Case fullCase)
        {
            return new CaseListItem()
            {
                Area = fullCase.Area,
                DadosPessoaisSensiveis = fullCase.DadosPessoaisSensiveis ? "SIM" : "NÃO",
                DataAtualizacao = fullCase.DataAtualizacao.ToString("d", CultureInfo.GetCultureInfo("pt-BR")),
                DataCriacao = fullCase.DataAtualizacao.ToString("d", CultureInfo.GetCultureInfo("pt-BR")),
                DescricaoFinalidade = fullCase.FinalidadeTratamento.DescricaoFinalidade,
                HipotesesTratamento = fullCase.FinalidadeTratamento.HipoteseTratamento,
                Id = fullCase.Id,
                Nome = fullCase.Nome,
            };
        }
    }
}