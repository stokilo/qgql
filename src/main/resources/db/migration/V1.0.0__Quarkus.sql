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
create sequence hibernate_sequence start 1 increment 1;

alter table if exists todo_item
    add constraint FK8ugl4ng70y2cbc3926pu0h9hw
    foreign key (list_id)
    references todo_list;
