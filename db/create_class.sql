INSERT INTO classroom(owner_id, title, subject, active, password)
VALUES ($1, $2, $3,$4, $5)
RETURNING *