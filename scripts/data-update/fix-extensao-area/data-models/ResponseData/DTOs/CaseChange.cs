using data_models.ResponseData.Models.ChangeLogging;

namespace data_models.ResponseData.DTOs
{
    public class CaseChange
    {
        public CaseDTO? Case { get; set; }
        public ChangeLog ChangeLog { get; set; }
    }
}