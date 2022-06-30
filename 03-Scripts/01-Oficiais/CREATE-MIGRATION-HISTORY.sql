
begin
execute immediate '
create table "ILA"."__MigrationHistory"
(
    "MigrationId" nvarchar2(150) not null, 
    "ContextKey" nvarchar2(300) not null, 
    "Model" blob not null, 
    "ProductVersion" nvarchar2(32) not null,
    constraint "PK___MigrationHistory" primary key ("MigrationId", "ContextKey")
) segment creation immediate';


end;
