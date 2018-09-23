create or replace function get_user_id (
	e text
) returns integer as $$
	declare
		u integer := (select id from "User" where email = e);
	begin
		if u is null then
			raise exception 'USER NOT FOUND';
		else
			return u;
		end if;
	end
$$ language sql;
