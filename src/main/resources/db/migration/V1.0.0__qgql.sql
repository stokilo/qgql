create sequence application_id_seq start with 1 increment by 1;

create sequence beneficiary_id_seq start with 1 increment by 1;

create sequence config_id_seq start with 1 increment by 1;

create sequence config_item_id_seq start with 1 increment by 1;

create sequence lead_comment_id_seq start with 1 increment by 1;
create sequence lead_id_seq start with 1 increment by 1;
create table Lead (creationDate time(6), id bigint not null, email varchar(255), firstName varchar(255), lastName varchar(255), leadNr varchar(255), status varchar(255), primary key (id));
create table LeadComment (id bigint not null, lead_id bigint, comment varchar(255), primary key (id));
alter table if exists LeadComment add constraint FKc95u6775pt1ssqgsa7rt5kjy4 foreign key (lead_id) references Lead;

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


-- Create the House table
CREATE TABLE House (
 house_id SERIAL PRIMARY KEY,
 number INTEGER NOT NULL,
 address VARCHAR(255) NOT NULL,
 owner VARCHAR(255) NOT NULL
);

-- Create the Room table with a foreign key referencing the House table
CREATE TABLE Room (
  room_id SERIAL PRIMARY KEY,
  house_id INTEGER NOT NULL,
  width FLOAT NOT NULL,
  height FLOAT NOT NULL,
  length FLOAT NOT NULL,
  CONSTRAINT fk_house
  FOREIGN KEY(house_id)
  REFERENCES House(house_id)
  ON DELETE CASCADE
);

-- Create the Window table with a foreign key referencing the Room table
CREATE TABLE Window (
 window_id SERIAL PRIMARY KEY,
 room_id INTEGER NOT NULL,
 size VARCHAR(50) NOT NULL,
 producer VARCHAR(255) NOT NULL,
 CONSTRAINT fk_room
 FOREIGN KEY(room_id)
 REFERENCES Room(room_id)
 ON DELETE CASCADE
);

-- Optional: Create indexes for faster queries (indexing foreign keys)
CREATE INDEX idx_room_house_id ON Room(house_id);
CREATE INDEX idx_window_room_id ON Window(room_id);
