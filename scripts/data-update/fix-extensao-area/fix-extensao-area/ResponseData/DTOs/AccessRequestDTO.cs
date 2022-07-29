using fix_extensao_area.Case_Helpers.Models.AccessControl;

namespace fix_extensao_area.Case_Helpers.DTOs
{
    public class AccessRequestDTO
    {
        public int Id { get; set; }
        public string UsernameSolicitante { get; set; }
        public string UsernameSuperior { get; set; }
        public string Justificativa { get; set; }
        public ICollection<string> GroupNames { get; set; }
        public TipoSolicitacaoAcesso TipoSolicitacaoAcesso { get; set; }
    }
}