SELECT quiz.quiz_id, quiz.quiz_name, r.user_id, quiz.classroom_id, u.username, Count(r.results_id) totalQnum, Count(case r.correct when 'true' then 1 else null end) correctNum FROM quiz
full JOIN results r on quiz.quiz_id = r.quiz_id
full JOIN users u on r.user_id = u.id
WHERE quiz.classroom_id = $1
GROUP BY quiz.quiz_id, r.user_id, u.username