create function get_user_id (
	email text
) returns integer as $$
	select id from "User" where email = $1;
$$ language sql;
