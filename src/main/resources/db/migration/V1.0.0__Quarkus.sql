create table APPLICATION (
id SERIAL PRIMARY KEY,
application_nr varchar(255),
contribution varchar(255),
frequency varchar(255)
);

create table BENEFICIARY (
id SERIAL PRIMARY KEY,
application_id SERIAL not null,
first_name varchar(255),
last_name varchar(255),
age varchar(255)
);

alter table if exists BENEFICIARY
add constraint FK8ugl4ng70y2cbc3926pu0h9hw
foreign key (application_id)
references APPLICATION;

create table CONFIG (
id SERIAL PRIMARY KEY,
config_name varchar(255)
);

create table CONFIG_ITEM (
id SERIAL PRIMARY KEY,
config_id SERIAL not null,
config_key varchar(255),
config_value varchar(255)
);

alter table if exists CONFIG_ITEM
add constraint FK8ugl4ng70y2cbc3926pu0h9hw
foreign key (config_id)
references CONFIG;

insert into APPLICATION(application_nr, contribution, frequency) values ('440000001', '100', 12);
insert into APPLICATION(application_nr, contribution, frequency) values ('440000002', '200', 6);
insert into APPLICATION(application_nr, contribution, frequency) values ('440000003', '300', 2);

insert into BENEFICIARY(application_id, first_name, last_name, age) values (1, 'slawomir 1', 'stec 1', '11');
insert into BENEFICIARY(application_id, first_name, last_name, age) values (1, 'kinga 1', 'stec 1', '11');
insert into BENEFICIARY(application_id, first_name, last_name, age) values (2, 'slawomir 2', 'stec 2', '22');
insert into BENEFICIARY(application_id, first_name, last_name, age) values (2, 'kinga 2', 'stec 2', '22');
insert into BENEFICIARY(application_id, first_name, last_name, age) values (3, 'slawomir 3', 'stec 3', '33');
insert into BENEFICIARY(application_id, first_name, last_name, age) values (3, 'kinga 3', 'stec 3', '33');

insert into CONFIG(config_name) values ('config 1');
insert into CONFIG_ITEM(config_id, config_key, config_value) values (1, 'key 11', 'val 11');
insert into CONFIG_ITEM(config_id, config_key, config_value) values (1, 'key 12', 'val 12');




