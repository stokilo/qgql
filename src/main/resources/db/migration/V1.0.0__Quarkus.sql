CREATE TABLE TODO_LIST
(
    id   INT PRIMARY KEY,
    name VARCHAR(20)
);
CREATE TABLE TODO_LIST_ITEM
(
    id   INT PRIMARY KEY,
    listid int references TODO_LIST(id),
    text VARCHAR(255)
);

INSERT INTO TODO_LIST(id, name)
VALUES (1, 'MyTodoList');

INSERT INTO TODO_LIST_ITEM(id, listid, name)
VALUES (1, 1,  'Item1');
