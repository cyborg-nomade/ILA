namespace CPTM.ILA.Web.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddRadios : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "ILA.ILA_RADIOS_CLICKED",
                c => new
                    {
                        Id = c.Decimal(nullable: false, precision: 9, scale: 0, identity: true),
                        HasOperador = c.Decimal(nullable: false, precision: 9, scale: 0),
                        FasesCicloTratamento = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisIdIdPessoal = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisIdIdGov = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisIdIdEletronica = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisIdLocEletronic = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinIdFin = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinRecursosFin = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinDivDespesas = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinSolvencia = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinEmpHipCred = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinAssistFin = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinApoliceSeg = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinPlanoPensao = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinTransFin = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinCompensacao = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinAtivProf = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinAcordAjust = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisFinAutConsent = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisCaracDetPess = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisCaracDetMil = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisCaracSitImi = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisCaracDescFis = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisHabHabPessoais = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisHabEstiloVida = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisHabViagensDesl = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisHabContatosSoc = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisHabPosses = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisHabDenIncAci = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisHabDistincoes = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisHabUsoMidia = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessCaracPsicDescPsi = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisCompFamCasCoab = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisCompFamHistCon = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisCompFamMemFam = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessIntLazAtivIntLaz = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisAssOutAssNSen = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessProcJudAdmCrimSus = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadPessProcJudAdmCrimConSen = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadPessProcJudAdmCrimAcJud = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadPessProcJudAdmCrimPenAdm = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadPessHabConsDadBensServ = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisResDadRes = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisEduTrAcadEsc = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisEduTrRegFin = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessEduTrQualiExpProf = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisProfEmpEmpAt = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisProfEmpRec = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisProfEmpResc = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisProfEmpCarr = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisProfEmpAbsDisc = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisProfEmpAvDes = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessRegVidImgVozVidImg = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessRegVidImgVozImgVig = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessRegVidImgVozVoz = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisOutOutItems = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessSensOrigemRacEtn = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisSensConvRelig = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisSensOpiniaoPol = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisSensFilSind = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisSensFilOrgRel = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisSensFilCrenFil = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisSensFilPrefPol = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessSensSaudeVidaSex = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisSensGeneticos = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CatDadosPessoaisSensBiometric = c.Decimal(nullable: false, precision: 9, scale: 0),
                        CompartilhamentoDadosPessoais = c.Decimal(nullable: false, precision: 9, scale: 0),
                        TransferenciaInternacional = c.Decimal(nullable: false, precision: 9, scale: 0),
                        ContratoServicosTITrataDad = c.Decimal(nullable: false, precision: 9, scale: 0),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("ILA.ILA_CASES", "RadiosClicked_Id", c => c.Decimal(precision: 9, scale: 0));
            CreateIndex("ILA.ILA_CASES", "RadiosClicked_Id");
            AddForeignKey("ILA.ILA_CASES", "RadiosClicked_Id", "ILA.ILA_RADIOS_CLICKED", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("ILA.ILA_CASES", "RadiosClicked_Id", "ILA.ILA_RADIOS_CLICKED");
            DropIndex("ILA.ILA_CASES", new[] { "RadiosClicked_Id" });
            DropColumn("ILA.ILA_CASES", "RadiosClicked_Id");
            DropTable("ILA.ILA_RADIOS_CLICKED");
        }
    }
}
