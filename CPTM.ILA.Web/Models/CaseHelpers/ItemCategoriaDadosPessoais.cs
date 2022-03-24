﻿using System.ComponentModel.DataAnnotations.Schema;
using CPTM.ILA.Web.Models.CaseHelpers.CategoriasDadosPessoais;
using CPTM.ILA.Web.Models.CaseHelpers.Enums;

namespace CPTM.ILA.Web.Models.CaseHelpers
{
    [Table("ILA_ITEM_CAT_DADOS_PESSOAIS")]
    public class ItemCategoriaDadosPessoais
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public TipoTempoRetencao TempoRetencao { get; set; }
        public TipoFontesRetenção FonteRetenção { get; set; }
        public string LocalArmazenamento { get; set; }
    }
}