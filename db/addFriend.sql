create function addFriend(
	initiator integer,
	recipient integer
) returns integer as $$
	insert into "Relations" (
		(select * from get_user_id(initiator)),
		(select * from get_user_id(recipient)),
		'pending'
	);
$$ language sql;
