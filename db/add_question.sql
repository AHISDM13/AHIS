insert into questions(quizid, question, answer, dummydata_a, dummydata_b, dummydata_c)
values($1, $2, $3,$4, $5)
RETURNING *