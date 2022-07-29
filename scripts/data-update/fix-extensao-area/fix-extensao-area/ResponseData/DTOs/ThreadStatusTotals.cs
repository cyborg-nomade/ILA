using fix_extensao_area.Case_Helpers.Models.Messaging;

namespace fix_extensao_area.Case_Helpers.DTOs
{
    public class ThreadStatusTotals
    {
        public ThreadStatus Status { get; set; }
        public int QuantityInStatus { get; set; }
    }
}