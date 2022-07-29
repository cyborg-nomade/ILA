using System.ComponentModel.DataAnnotations.Schema;

namespace fix_extensao_area.Case_Helpers.Models.ChangeLogging
{
    [Table("ILA_CHANGELOGS")]
    public class ChangeLog
    {
        public int Id { get; set; }
        public int? UserId { get; set; }
        public string? UsernameResp { get; set; }
        public int? CaseId { get; set; }
        public string? CaseRef { get; set; }
        public DateTime ChangeDate { get; set; }
        public string CaseDiff { get; set; }
    }
}