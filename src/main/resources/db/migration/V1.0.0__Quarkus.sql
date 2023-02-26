create table todo_list (
   id serial primary key,
   name varchar not null
);

create table todo_item (
    id serial primary key,
    headline text not null,
    body text,
    list_id int4 references todo_list(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

alter sequence todo_list_id_seq restart with 1;

insert into todo_list(id,name) values (nextval('todo_list_id_seq'), 'list 1 user 1');
insert into todo_list(id,name) values (nextval('todo_list_id_seq'), 'list 2 user 1');
insert into todo_list(id,name) values (nextval('todo_list_id_seq'), 'list 1 user 2');
insert into todo_list(id,name) values (nextval('todo_list_id_seq'), 'list 2 user 2');

insert into todo_item(headline, body, list_id) values ('h1', 'b1', 1);
insert into todo_item(headline, body, list_id) values ('h2', 'b2', 2);
insert into todo_item(headline, body, list_id) values ('h2', 'b2', 3);
insert into todo_item(headline, body, list_id) values ('h2', 'b2', 4);
