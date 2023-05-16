create table todo_item (
                           id int8 not null,
                           body varchar(255),
                           headline varchar(255),
                           list_id int8,
                           primary key (id)
);

create table todo_list (
                           id int8 not null,
                           name varchar(255),
                           primary key (id)
);

create table orders(
                       id int8 not null,
                       name varchar(255)
);

create sequence hibernate_sequence start 1 increment 1;

alter table if exists todo_item
    add constraint FK8ugl4ng70y2cbc3926pu0h9hw
    foreign key (list_id)
    references todo_list;


insert into todo_list(id,name) values (nextval('hibernate_sequence'), 'list 1 user 1');
insert into todo_item(id, headline, body, list_id) values (1, 'h1', 'b1', 1);

insert into orders(id,name) values (nextval('hibernate_sequence'), 'Elvis DB');
