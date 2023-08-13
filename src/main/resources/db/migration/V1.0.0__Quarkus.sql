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
