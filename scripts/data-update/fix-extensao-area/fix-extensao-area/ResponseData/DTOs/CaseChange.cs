using fix_extensao_area.Case_Helpers.Models.ChangeLogging;

namespace fix_extensao_area.Case_Helpers.DTOs
{
    public class CaseChange
    {
        public CaseDTO? Case { get; set; }
        public ChangeLog ChangeLog { get; set; }
    }
}