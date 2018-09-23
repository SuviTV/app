create or replace function accept_friend (
	i text,
	r text
) returns integer as $$
	update "Relations" set current_status = 'active'
		where initiator = (select get_user_id(i))
		and recipient = (select get_user_id(r))
		returning id;
$$ language sql;

