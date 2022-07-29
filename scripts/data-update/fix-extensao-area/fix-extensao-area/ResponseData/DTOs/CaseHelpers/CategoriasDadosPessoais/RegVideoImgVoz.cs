using System.ComponentModel.DataAnnotations.Schema;

namespace fix_extensao_area.Case_Helpers.DTOs.CaseHelpers.CategoriasDadosPessoais
{
    [Table("ILA_REG_VIDEO_IMG_VOZ")]
    public class RegVideoImgVoz
    {
        public int Id { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> VideoImagem { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> ImagemVigilancia { get; set; }
        public virtual ICollection<ItemCategoriaDadosPessoasDTO> Voz { get; set; }
    }
}