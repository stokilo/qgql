create table TODO_LIST (id int8 not null, name varchar(255), primary key (id));
create table TODO_LIST_ITEM (id int8 not null, text varchar(255), listid int8, primary key (id));
create sequence hibernate_sequence start 1 increment 1;
alter table if exists TodoListItem add constraint FK7tyuhclt25dey6tsrc8rn4qc1 foreign key (listid) references TodoList;

INSERT INTO TODO_LIST(id, name)
VALUES (1, 'MyTodoList');

INSERT INTO TODO_LIST_ITEM(id, listid, text)
VALUES (1, 1,  'Item1');

INSERT INTO TODO_LIST_ITEM(id, listid, text)
VALUES (2, 1,  'Item2');
