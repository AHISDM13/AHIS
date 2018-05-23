INSERT INTO quiz(classroom_id, quizName)
VALUES ($1, $2)
RETURNING *