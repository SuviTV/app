create function addFriend(
	text,
	text
) returns integer as $$
	insert into "Relations" (
		(select * from get_user_id($1)),
		(select * from get_user_id($2)),
		'pending'
	);
$$ language sql;
