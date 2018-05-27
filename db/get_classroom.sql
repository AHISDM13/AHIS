select c.classroom_id,q.quiz_id,q.quiz_name,c.owner_id,c.title,c.subject from classroom c
full join quiz q on c.classroom_id = q.classroom_id
where c.classroom_id=$1;