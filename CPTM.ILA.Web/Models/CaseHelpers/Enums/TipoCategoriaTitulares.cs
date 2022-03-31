﻿namespace CPTM.ILA.Web.Models.CaseHelpers.Enums
{
    public class TipoCategoriaTitulares
    {
        public TipoCategoriaTitulares(string value)
        {
            Value = value;
        }

        public string Value { get; private set; }

        public static TipoCategoriaTitulares Colaboradores => new TipoCategoriaTitulares("Colaboradores");
        public static TipoCategoriaTitulares Dependentes => new TipoCategoriaTitulares("Dependentes");
        public static TipoCategoriaTitulares Clientes => new TipoCategoriaTitulares("Clientes");

        public static TipoCategoriaTitulares EmpregadosTerceirizados =>
            new TipoCategoriaTitulares("EmpregadosTerceirizados");

        public static TipoCategoriaTitulares Outros => new TipoCategoriaTitulares("Outros");
    }
}