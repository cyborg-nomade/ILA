﻿using System.ComponentModel.DataAnnotations.Schema;

namespace data_models.ResponseData.DTOs.CaseHelpers.CategoriasDadosPessoais
{
    [Table("ILA_IDENTIFICACAO")]
    public class Identificacao
    {
        public int Id { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> IdPessoal { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> IdGov { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> IdEletronica { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> LocEletronica { get; set; }
    }
}