alter table "ILA"."ILA_AGENTE_TRATAMENTO" add ("Case_Id" number(9, 0) null)
/

begin
  execute immediate
  'create index "ILA"."IX_ILA_AGENTE_TRATA_1759328514" on "ILA"."ILA_AGENTE_TRATAMENTO" ("Case_Id")';
exception
  when others then
    if sqlcode <> -1408 then
      raise;
    end if;
end;
/

alter table "ILA"."ILA_AGENTE_TRATAMENTO" add constraint "FK_ILA_AGENTE_TRATA_1558023044" foreign key ("Case_Id") references "ILA"."ILA_CASES" ("Id")
/
