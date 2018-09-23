create or replace function list_friends(
	integer
) returns setof record as $$
	select first_name, last_name, email from "User"
	join "Relations" r on r.initiator = "User".id
	where r.recipient = $1
	and r.current_status = 'active'
	union
	select first_name, last_name, email from "User"
	join "Relations" r on r.recipient = "User".id
	where r.initiator = $1
	and r.current_status = 'active';
$$ language sql;
