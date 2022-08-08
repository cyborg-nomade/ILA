namespace data_models.ResponseData.Models.CaseHelpers.Enums
{
    public class TipoCompartilhamentoDados
    {
        public TipoCompartilhamentoDados(string value)
        {
            Value = value;
        }

        public TipoCompartilhamentoDados()
        {
            Value = "";
        }

        public string Value { get; set; }

        public static TipoCompartilhamentoDados Publico() => new TipoCompartilhamentoDados("Público");
        public static TipoCompartilhamentoDados Privado() => new TipoCompartilhamentoDados("Privado");
    }
}