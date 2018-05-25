insert into questions
    (quiz_id, question, answer, dummydata_a, dummydata_b, dummydata_c)
values($1, $2, $3, $4, $5, $6)
-- RETURNING *