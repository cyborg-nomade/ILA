using System.ComponentModel.DataAnnotations.Schema;

namespace data_models.ResponseData.Models.CaseHelpers
{
    [Table("ILA_AGENTE_TRATAMENTO")]
    public class AgenteTratamento
    {
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Area { get; set; } = string.Empty;
        public string Telefone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;

        public override string ToString()
        {
            return
                @$"{nameof(Id)}: {Id}, 
{nameof(Nome)}: {Nome}, 
{nameof(Area)}: {Area}, 
{nameof(Telefone)}: {Telefone}, 
{nameof(Email)}: {Email}";
        }
    }
}