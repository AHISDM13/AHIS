INSERT INTO student(classroom_id, user_id)
VALUES ($1, $2)
RETURNING *;