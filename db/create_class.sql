INSERT INTO classroom(owner_id, title, subject, active, password,public)
VALUES ($1, $2, $3,$4, $5,$6);
select * from classroom where owner_id = $1;