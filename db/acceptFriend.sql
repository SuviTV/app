create or replace function accept_friend (
	i text,
	r text
) returns integer as $$
	declare
		f integer := (
			select id from "Relations"
				where initiator = i
				and recipient = r
			);
	begin
		if f is null then
			raise exception 'RELATION NOT FOUND';
		end if;

		update "Relations" set current_status = 'active'
			where id = f;
	end;
$$ language sql;

