SELECT quiz.quiz_id, quiz.quiz_name, Count(r.results_id) totalQnum, Count(case r.correct when 'true' then 1 else null end) correctNum FROM quiz
full JOIN results r on quiz.quiz_id = r.quiz_id
WHERE quiz.classroom_id =$1
GROUP BY quiz.quiz_id;