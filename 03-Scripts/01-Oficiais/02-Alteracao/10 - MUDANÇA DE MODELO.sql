begin
execute immediate '
create table "ILA"."ILA_RADIOS_CLICKED"
(
    "Id" number(9, 0) not null, 
    "HasOperador" number(9, 0) not null, 
    "FasesCicloTratamento" number(9, 0) not null, 
    "CatDadosPessoaisIdIdPessoal" number(9, 0) not null, 
    "CatDadosPessoaisIdIdGov" number(9, 0) not null, 
    "CatDadosPessoaisIdIdEletronica" number(9, 0) not null, 
    "CatDadosPessoaisIdLocEletronic" number(9, 0) not null, 
    "CatDadosPessoaisFinIdFin" number(9, 0) not null, 
    "CatDadosPessoaisFinRecursosFin" number(9, 0) not null, 
    "CatDadosPessoaisFinDivDespesas" number(9, 0) not null, 
    "CatDadosPessoaisFinSolvencia" number(9, 0) not null, 
    "CatDadosPessoaisFinEmpHipCred" number(9, 0) not null, 
    "CatDadosPessoaisFinAssistFin" number(9, 0) not null, 
    "CatDadosPessoaisFinApoliceSeg" number(9, 0) not null, 
    "CatDadosPessoaisFinPlanoPensao" number(9, 0) not null, 
    "CatDadosPessoaisFinTransFin" number(9, 0) not null, 
    "CatDadosPessoaisFinCompensacao" number(9, 0) not null, 
    "CatDadosPessoaisFinAtivProf" number(9, 0) not null, 
    "CatDadosPessoaisFinAcordAjust" number(9, 0) not null, 
    "CatDadosPessoaisFinAutConsent" number(9, 0) not null, 
    "CatDadosPessoaisCaracDetPess" number(9, 0) not null, 
    "CatDadosPessoaisCaracDetMil" number(9, 0) not null, 
    "CatDadosPessoaisCaracSitImi" number(9, 0) not null, 
    "CatDadosPessoaisCaracDescFis" number(9, 0) not null, 
    "CatDadosPessoaisHabHabPessoais" number(9, 0) not null, 
    "CatDadosPessoaisHabEstiloVida" number(9, 0) not null, 
    "CatDadosPessoaisHabViagensDesl" number(9, 0) not null, 
    "CatDadosPessoaisHabContatosSoc" number(9, 0) not null, 
    "CatDadosPessoaisHabPosses" number(9, 0) not null, 
    "CatDadosPessoaisHabDenIncAci" number(9, 0) not null, 
    "CatDadosPessoaisHabDistincoes" number(9, 0) not null, 
    "CatDadosPessoaisHabUsoMidia" number(9, 0) not null, 
    "CatDadosPessCaracPsicDescPsi" number(9, 0) not null, 
    "CatDadosPessoaisCompFamCasCoab" number(9, 0) not null, 
    "CatDadosPessoaisCompFamHistCon" number(9, 0) not null, 
    "CatDadosPessoaisCompFamMemFam" number(9, 0) not null, 
    "CatDadosPessIntLazAtivIntLaz" number(9, 0) not null, 
    "CatDadosPessoaisAssOutAssNSen" number(9, 0) not null, 
    "CatDadosPessProcJudAdmCrimSus" number(9, 0) not null, 
    "CatDadPessProcJudAdmCrimConSen" number(9, 0) not null, 
    "CatDadPessProcJudAdmCrimAcJud" number(9, 0) not null, 
    "CatDadPessProcJudAdmCrimPenAdm" number(9, 0) not null, 
    "CatDadPessHabConsDadBensServ" number(9, 0) not null, 
    "CatDadosPessoaisResDadRes" number(9, 0) not null, 
    "CatDadosPessoaisEduTrAcadEsc" number(9, 0) not null, 
    "CatDadosPessoaisEduTrRegFin" number(9, 0) not null, 
    "CatDadosPessEduTrQualiExpProf" number(9, 0) not null, 
    "CatDadosPessoaisProfEmpEmpAt" number(9, 0) not null, 
    "CatDadosPessoaisProfEmpRec" number(9, 0) not null, 
    "CatDadosPessoaisProfEmpResc" number(9, 0) not null, 
    "CatDadosPessoaisProfEmpCarr" number(9, 0) not null, 
    "CatDadosPessoaisProfEmpAbsDisc" number(9, 0) not null, 
    "CatDadosPessoaisProfEmpAvDes" number(9, 0) not null, 
    "CatDadosPessRegVidImgVozVidImg" number(9, 0) not null, 
    "CatDadosPessRegVidImgVozImgVig" number(9, 0) not null, 
    "CatDadosPessRegVidImgVozVoz" number(9, 0) not null, 
    "CatDadosPessoaisOutOutItems" number(9, 0) not null, 
    "CatDadosPessSensOrigemRacEtn" number(9, 0) not null, 
    "CatDadosPessoaisSensConvRelig" number(9, 0) not null, 
    "CatDadosPessoaisSensOpiniaoPol" number(9, 0) not null, 
    "CatDadosPessoaisSensFilSind" number(9, 0) not null, 
    "CatDadosPessoaisSensFilOrgRel" number(9, 0) not null, 
    "CatDadosPessoaisSensFilCrenFil" number(9, 0) not null, 
    "CatDadosPessoaisSensFilPrefPol" number(9, 0) not null, 
    "CatDadosPessSensSaudeVidaSex" number(9, 0) not null, 
    "CatDadosPessoaisSensGeneticos" number(9, 0) not null, 
    "CatDadosPessoaisSensBiometric" number(9, 0) not null, 
    "CompartilhamentoDadosPessoais" number(9, 0) not null, 
    "TransferenciaInternacional" number(9, 0) not null, 
    "ContratoServicosTITrataDad" number(9, 0) not null,
    constraint "PK_ILA_RADIOS_CLICKED" primary key ("Id")
) segment creation immediate';

execute immediate '
create sequence "ILA"."SQ_ILA_RADIOS_CLICKED"';

execute immediate '
create or replace trigger "ILA"."TR_ILA_RADIOS_CLICKED"
before insert on "ILA"."ILA_RADIOS_CLICKED"
for each row
begin
  select "ILA"."SQ_ILA_RADIOS_CLICKED".nextval into :new."Id" from dual;
end;';

execute immediate '
alter table "ILA"."ILA_CASES" add ("RadiosClicked_Id" number(9, 0) null)';

begin
  execute immediate
  'create index "ILA"."IX_ILA_CASES_RadiosClicked_Id" on "ILA"."ILA_CASES" ("RadiosClicked_Id")';
exception
  when others then
    if sqlcode <> -1408 then
      raise;
    end if;
end;
execute immediate '
alter table "ILA"."ILA_CASES" add constraint "FK_ILA_CASES_RadiosClicked_Id" foreign key ("RadiosClicked_Id") references "ILA"."ILA_RADIOS_CLICKED" ("Id")';

end;
