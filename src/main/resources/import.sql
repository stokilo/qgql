insert into Application(id, applicationNr)
values (nextval('application_id_seq'), '440000001');
insert into Application(id, applicationNr)
values (nextval('application_id_seq'), '440000002');
insert into Application(id, applicationNr)
values (nextval('application_id_seq'), '440000003');
insert into BENEFICIARY(id, firstName, application_id)
values (nextval('beneficiary_id_seq'), 'kinga', 1);
insert into BENEFICIARY(id, firstName, application_id)
values (nextval('beneficiary_id_seq'), 'slawek', 1);
insert into Application(id, applicationNr)
values (nextval('application_id_seq'), '440000003');


insert into Config(id, name)
values (nextval('config_id_seq'), 'app-config');
insert into ConfigItem(id, key, value, config_id)
values (nextval('config_item_id_seq'), 'key1', 'val1', 1);

insert into Lead(id, leadNr, status, email, firstName, lastName, creationDate)
values (nextval('lead_id_seq'), 'ADC-331-000000001', 'new', 'test1@gmail.com', 'John1', 'Doe1', CURRENT_DATE);

insert into Lead(id, leadNr, status, email, firstName, lastName, creationDate)
values (nextval('lead_id_seq'), 'ADC-331-000000002', 'open', 'test2@gmail.com', 'John2', 'Doe2', CURRENT_DATE);

insert into Lead(id, leadNr, status, email, firstName, lastName, creationDate)
values (nextval('lead_id_seq'), 'ADC-331-000000003', 'open', 'test3@gmail.com', 'John3', 'Doe3', CURRENT_DATE);
