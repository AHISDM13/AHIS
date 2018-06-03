SELECT quiz.quiz_id, quiz.classroom_id, quiz.quiz_name, Count(r.results_id) totalQnum, Count(case r.correct when 'true' then 1 else null end) correctNum FROM quiz
full JOIN results r on quiz.quiz_id = r.quiz_id
WHERE r.user_id =$1 AND quiz.classroom_id=$2
GROUP BY quiz.quiz_id;