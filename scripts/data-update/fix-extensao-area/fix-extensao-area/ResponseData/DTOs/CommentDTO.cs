using fix_extensao_area.Case_Helpers.Models.AccessControl;

namespace fix_extensao_area.Case_Helpers.DTOs
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