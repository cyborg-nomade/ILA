using data_models.ResponseData.Models.Messaging;

namespace data_models.ResponseData.DTOs
{
    public class ThreadStatusTotals
    {
        public ThreadStatus Status { get; set; }
        public int QuantityInStatus { get; set; }
    }
}