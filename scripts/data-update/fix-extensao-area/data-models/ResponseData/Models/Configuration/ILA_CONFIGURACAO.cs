using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace data_models.ResponseData.Models.Configuration
{
    [Table("ILA.ILA_CONFIGURACAO")]
    public partial class ILA_CONFIGURACAO
    {
        [Key] [StringLength(250)] public string Parametro { get; set; }

        [StringLength(4000)] public string TxDescricao { get; set; }

        [StringLength(4000)] public string Valor { get; set; }

        public int IdCodusuarioCadastro { get; set; }

        public DateTime DtCadastro { get; set; }

        public int? IdCodusuarioAlteracao { get; set; }

        public DateTime? DtAlteracao { get; set; }
    }
}