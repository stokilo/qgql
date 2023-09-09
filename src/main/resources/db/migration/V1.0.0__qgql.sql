create sequence application_id_seq start with 1 increment by 1;

create sequence beneficiary_id_seq start with 1 increment by 1;

create sequence config_id_seq start with 1 increment by 1;

create sequence config_item_id_seq start with 1 increment by 1;

create table Application
(
    id            bigint not null,
    applicationNr varchar(255),
    primary key (id)
);

create table Beneficiary
(
    id             bigint not null,
    firstName      varchar(255),
    application_id bigint,
    primary key (id)
);

create table Config
(
    id   bigint not null,
    name varchar(255),
    primary key (id)
);

create table ConfigItem
(
    id        bigint not null,
    key       varchar(255),
    value     varchar(255),
    config_id bigint,
    primary key (id)
);

alter table if exists Beneficiary
    add constraint FKiadp337sh9eg05fbo3fxaa47
        foreign key (application_id)
            references Application;

alter table if exists ConfigItem
    add constraint FKb5ksob1nyq3k1dxn5uaxlwsdx
        foreign key (config_id)
            references Config;

