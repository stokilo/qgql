create sequence hibernate_sequence start 1 increment 1;

create table todo_list (
   id int8 primary key,
   name varchar not null
);

create table todo_item (
    id int8 primary key,
    headline text not null,
    body text,
    list_id int8 references todo_list(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

insert into todo_list(id,name) values (1, 'list 1 user 1');
insert into todo_item(id, headline, body, list_id) values (1, 'h1', 'b1', 1);
