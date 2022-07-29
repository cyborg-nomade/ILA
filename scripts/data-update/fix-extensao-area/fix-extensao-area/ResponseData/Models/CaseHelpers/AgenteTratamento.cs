using System.ComponentModel.DataAnnotations.Schema;

namespace fix_extensao_area.Case_Helpers.Models.CaseHelpers
{
    [Table("ILA_AGENTE_TRATAMENTO")]
    public class AgenteTratamento
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Area { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }

        public override string ToString()
        {
            return
                $"{nameof(Id)}: {Id}, {nameof(Nome)}: {Nome}, {nameof(Area)}: {Area}, {nameof(Telefone)}: {Telefone}, {nameof(Email)}: {Email}";
        }
    }
}