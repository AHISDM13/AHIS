INSERT INTO quiz(classroom_id, quiz_name, quiz_type)
VALUES ($1, $2, $3)
RETURNING *