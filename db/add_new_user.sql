insert into users(username,email) values ($1,$2)
RETURNING *;