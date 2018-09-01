create table User (
	id serial primary key,
	first_name text not null,
	last_name text,
	email text unique,
	bio text,
	photo_url text unique
);

comment on table User is 'All users are stored here'
comment on column User.id is 'Unique identifier for the User table'
comment on column User.first_name is 'Given first name of the user'
comment on column User.last_name is 'Given last name of the user'
comment on column User.email is 'Email for the user'
comment on column User.bio is 'User-defined short biography for the user'
comment on column User.photo_url is 'Url for the profile picture of the user'

create table Relationship (
	id serial primary key,
	user_1 int references(User.id),
	user_2 int references(User.id),
	status int
);

comment on table Relationship is 'Location for all user relationships'
comment on column Relationship.id is 'Unique identifier for the Relationship table'
comment on column Relationship.user_1 is 'Reference to the initializing user'
comment on column Relationship.user_2 is 'Reference to the receiving user'
comment on column Relationship.status is
'Numerical identifier for the status of the relationship. 0 = pending, 1 = active, 2 = inactive'

create table Post (
	id serial primary key,
	user_id int references(User.id),
	title text,
	content text,
	date timestamp
);

comment on table Post is 'Posts...'
comment on column Post.id is 'Unique identifier for the Post table'
comment on column Post.user_id is 'Reference to the posting User'
comment on column Post.title is 'Title of the Post'
comment on column Post.content is 'Content of the Post'
comment on column Post.date is 'Date and time when the Post was created'

create table Comment (
	id serial primary key,
	post_id int references(Post.id),
	user_id int references(User.id),
	content text not null,
	date timestamp
);

comment on table Comment is 'Comments...'
comment on column Comment.id is 'Unique identifier for the Comment table'
comment on column Comment.post_id is 'Reference to the connected Post'
comment on column Comment.user_id is 'Reference to the commenting User'
comment on column Comment.content is 'Body of the comment'
comment on column Comment.date is 'Date and time when the Comment was created'

create table Like (
	id serial primary key,
	user_id int references(User.id),
	relationship_id int references(Relationship.id),
	post_id int references(Post.id),
	comment_id int references(Comment.id)
);

comment on table Like is 'Likes. Only one of relationship, post, and comment can be not null'
comment on column Like.id is 'Unique identifier for the Like table'
comment on column Like.user_id is 'References to the liking User'
comment on column Like.relationship_id is 'References to the liked relationship'
comment on column Like.post_id is 'References to the liked post'
comment on column Like.comment_id is 'References to the liked comment'
