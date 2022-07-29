using fix_extensao_area.Case_Helpers.Models.AccessControl;

namespace fix_extensao_area.Case_Helpers.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string? Username { get; set; }
        public bool IsComite { get; set; }
        public bool IsDPO { get; set; }
        public bool IsSystem { get; set; }
        public Group OriginGroup { get; set; }
        public ICollection<Group> Groups { get; set; }
        public string Nome { get; set; }

        public override string ToString()
        {
            return
                $"{nameof(Id)}: {Id}, {nameof(Username)}: {Username}, {nameof(IsComite)}: {IsComite}, {nameof(IsDPO)}: {IsDPO}, {nameof(IsSystem)}: {IsSystem}, {nameof(OriginGroup)}: {OriginGroup}, {nameof(Groups)}: {Groups}, {nameof(Nome)}: {Nome}";
        }
    }
}