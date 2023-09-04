insert into Application(id,applicationNr) values (nextval('application_id_seq'), '440000001');
insert into Application(id,applicationNr) values (nextval('application_id_seq'), '440000002');
insert into Application(id,applicationNr) values (nextval('application_id_seq'),'440000003');

insert into BENEFICIARY(id, firstName, application_id) values (nextval('beneficiary_id_seq'), 'kinga', 1);
insert into BENEFICIARY(id, firstName, application_id) values (nextval('beneficiary_id_seq'), 'slawek', 1);
