select q.question , q.answer , r.results_id , r.user_answer, r.user_id , r.correct 
from results r
join questions q on q.question_id = r.question_id
where q.quiz_id= $1