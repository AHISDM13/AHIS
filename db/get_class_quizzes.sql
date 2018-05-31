SELECT quiz.quiz_id, quiz.quiz_name, quiz.quiz_type, COUNT(quest.question_id)
FROM quiz
    JOIN questions quest ON quiz.quiz_id =quest.quiz_id
WHERE quiz.classroom_id =$1
GROUP BY quiz.quiz_id;