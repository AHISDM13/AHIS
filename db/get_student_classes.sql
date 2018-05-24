SELECT c.classroom_id, c.title, c.subject FROM student s
JOIN classroom c ON s.classroom_id=c.classroom_id
WHERE s.user_id = $1;