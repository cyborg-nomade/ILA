﻿namespace data_models.ResponseData.DTOs
{
    public class CaseListItem
    {
        public int Id { get; set; }
        public string Ref { get; set; }
        public string Nome { get; set; }
        public string Area { get; set; }
        public string DataEnvio { get; set; }
        public string DataAprovacao { get; set; }
        public string DataProxRevisao { get; set; }
        public string UsuarioResp { get; set; }
        public string DadosPessoaisSensiveis { get; set; }
        public int GrupoCriadorId { get; set; }
        public bool Aprovado { get; set; }
        public bool Reprovado { get; set; }
        public bool EncaminhadoAprovacao { get; set; }
        public string ComiteMemberResp { get; set; }
        public string StatusTexto { get; set; }
    }
}