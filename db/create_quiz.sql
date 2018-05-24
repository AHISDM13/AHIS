INSERT INTO quiz(classroom_id, quiz_name)
VALUES ($1, $2)
RETURNING *