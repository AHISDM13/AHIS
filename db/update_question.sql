UPDATE questions
SET question = $2, 
answer=$3,
dummy_data_a=$4, 
dummy_data_b=$5,
dummy_data_c=$6
WHERE question_id=$1;
