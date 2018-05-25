SELECT s.user_id, u.first_name, u.last_name FROM student s
JOIN users u ON s.user_id = u.id
WHERE s.classroom_id = $1;