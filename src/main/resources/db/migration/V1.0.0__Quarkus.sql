create table MOVIE (
id int8 not null,
title varchar(255),
year varchar(255),
primary key (id)
);

create table DIRECTOR (
id int8 not null,
name varchar(255),
primary key (id)
);

create table MOVIE_DIRECTOR(
movie_id int8 not null,
director_id int8 not null
);

create table FAVOURITES(
    user_id int8 not null,
    movie_id int8 not null
);

create sequence p_sequence start 1 increment 1;
create sequence movies_sequence start 1 increment 1;
create sequence director_sequence start 1 increment 1;

insert into movie(id, title, year) values (nextval('movies_sequence'), 'GodFather 1', '1960');
insert into movie(id, title, year) values (nextval('movies_sequence'), 'GodFather 2', '1980');
insert into movie(id, title, year) values (nextval('movies_sequence'), 'GodFather 3', '1990');

insert into director(id, name) values (nextval('director_sequence'), 'Director 1');
insert into director(id, name) values (nextval('director_sequence'), 'Director 2');

insert into MOVIE_DIRECTOR(movie_id, director_id) values (1, 1);
insert into MOVIE_DIRECTOR(movie_id, director_id) values (2, 2);
insert into MOVIE_DIRECTOR(movie_id, director_id) values (3, 3);

insert into FAVOURITES(user_id, movie_id) values (1, 1);
insert into FAVOURITES(user_id, movie_id) values (1, 2);


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


insert into todo_list(id,name) values (nextval('hibernate_sequence'), 'list 1 user 1');
insert into todo_item(id, headline, body, list_id) values (1, 'h1', 'b1', 1);


