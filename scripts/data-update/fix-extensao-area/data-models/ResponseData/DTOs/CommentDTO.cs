using data_models.ResponseData.Models.AccessControl;

namespace data_models.ResponseData.DTOs
{
    public class CommentDTO
    {
        public string Text { get; set; }
        public User Author { get; set; }
        public Thread Thread { get; set; }
        public string RefItem { get; set; }
        public int GroupId { get; set; }
    }
}