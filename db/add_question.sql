insert into questions
    (quiz_id, question, answer, dummy_data_a, dummy_data_b, dummy_data_c)
values($1, $2, $3, $4, $5, $6)
-- RETURNING *
