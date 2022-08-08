﻿using System.ComponentModel.DataAnnotations.Schema;

namespace data_models.ResponseData.DTOs.CaseHelpers.CategoriasDadosPessoais
{
    [Table("ILA_OUTROS")]
    public class Outros
    {
        public int Id { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> OutrosItems { get; set; }
    }
}