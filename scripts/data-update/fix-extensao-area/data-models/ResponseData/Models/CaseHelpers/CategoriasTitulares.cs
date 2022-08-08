using System.ComponentModel.DataAnnotations.Schema;

namespace data_models.ResponseData.Models.CaseHelpers
{
    [Table("ILA_CATEGORIA_TITULARES")]
    public class CategoriasTitulares
    {
        public int Id { get; set; }
        public ICollection<ItemCategoriaTitulares> Categorias { get; set; }

        public ItemCategoriaTitularesExtra CriancasAdolescentes { get; set; }

        public ItemCategoriaTitularesExtra OutrosGruposVulneraveis { get; set; }
    }
}