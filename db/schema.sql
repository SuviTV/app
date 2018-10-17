-- MAIN SQL SCHEMA -- 
drop table if exists "Relations"; drop table if exists "User"; 

create table "User" (
	id serial primary key,
	first_name text not null,
	last_name text,
	email text unique not null,
	bio text,
	photo_url text unique
);

comment on table "User" is 'All users are stored here';
comment on column "User".id is 'Unique identifier for the User table';
comment on column "User".first_name is 'Given first name of the user';
comment on column "User".last_name is 'Given last name of the user';
comment on column "User".email is 'Email for the user';
comment on column "User".bio is 'User-defined short biography for the user';
comment on column "User".photo_url is 'Url for the profile picture of the user';

create type status as enum ('pending', 'active', 'inactive');

comment on type status is 'all possible relationship stati';

create table "Relations" (
	id serial primary key,
	initiator int references "User"(id),
	recipient int references "User"(id),
	current_status status
);

comment on table "Relations" is 'All relationships and their current status';
comment on column "Relations".id is 'Unique identifier for the Relations table';
comment on column "Relations".initiator is 'The id for the user who initiated';
comment on column "Relations".recipient is 'The id for the user who recieved';
comment on column "Relations".current_status is
'Numerical representing the current friendship status. See comment on status type';

insert into "User" (first_name, last_name, email)
	values ('Brennon', 'Schow', 'brennon@suvi.tv'),
	('Brett', 'Johnson', 'brett@suvi.tv'),
	('Steve', 'Warren', 'steve@suvi.tv');