namespace CPTM.ILA.Web.Models.CaseHelpers.Enums
{
    public class TipoTempoRetencao
    {
        public TipoTempoRetencao(string value)
        {
            Value = value;
        }

        public TipoTempoRetencao()
        {
            Value = "";
        }

        public string Value { get; set; }

        public static TipoTempoRetencao Ano1() => new TipoTempoRetencao("até 1 ano");
        public static TipoTempoRetencao Ano5() => new TipoTempoRetencao("mais que 1 até 5 anos");
        public static TipoTempoRetencao Ano10() => new TipoTempoRetencao("mais que 5 até 10 anos");
        public static TipoTempoRetencao Ano15() => new TipoTempoRetencao("mais que 10 até 15 anos");
        public static TipoTempoRetencao Ano20() => new TipoTempoRetencao("mais que 15 até 20 anos");
        public static TipoTempoRetencao Ano30() => new TipoTempoRetencao("mais que 20 até 30 anos");
        public static TipoTempoRetencao MaisQue30() => new TipoTempoRetencao("mais que 30 anos");
    }
}