drop table if exists dogs CASCADE;
create table football_player (id integer generated by default as identity, name varchar(255) not null, shirt_number integer not null, team varchar(255) not null, primary key (id));
