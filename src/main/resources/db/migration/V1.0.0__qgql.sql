
    create sequence application_id_seq start with 1 increment by 1;

    create sequence beneficiary_id_seq start with 1 increment by 1;

    create table Application (
        id bigint not null,
        applicationNr varchar(255),
        primary key (id)
    );

    create table Beneficiary (
        id bigint not null,
        firstName varchar(255),
        primary key (id)
    );
