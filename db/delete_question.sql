delete from questions where question_id = $1;
select *
from questions
where quiz_id = $2;