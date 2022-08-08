namespace CPTM.ILA.Web.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddOperadores : DbMigration
    {
        public override void Up()
        {
            AddColumn("ILA.ILA_AGENTE_TRATAMENTO", "Case_Id", c => c.Decimal(precision: 9, scale: 0));
            CreateIndex("ILA.ILA_AGENTE_TRATAMENTO", "Case_Id");
            AddForeignKey("ILA.ILA_AGENTE_TRATAMENTO", "Case_Id", "ILA.ILA_CASES", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("ILA.ILA_AGENTE_TRATAMENTO", "Case_Id", "ILA.ILA_CASES");
            DropIndex("ILA.ILA_AGENTE_TRATAMENTO", new[] { "Case_Id" });
            DropColumn("ILA.ILA_AGENTE_TRATAMENTO", "Case_Id");
        }
    }
}
