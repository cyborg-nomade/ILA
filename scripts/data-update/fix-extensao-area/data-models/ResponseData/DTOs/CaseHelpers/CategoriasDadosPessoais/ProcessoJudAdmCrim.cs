﻿using System.ComponentModel.DataAnnotations.Schema;

namespace data_models.ResponseData.DTOs.CaseHelpers.CategoriasDadosPessoais
{
    [Table("ILA_PROCESSO_JUD_ADM_CRIM")]
    public class ProcessoJudAdmCrim
    {
        public int Id { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> Suspeitas { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> CondenacoesSentencas { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> AcoesJud { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> PenalidadesAdm { get; set; }
    }
}