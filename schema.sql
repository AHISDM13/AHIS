-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     authid TEXT,
--     username TEXT,
--     email TEXT,
--     first_name TEXT,
--     last_name TEXT,
--     dob TEXT
-- )

-- CREATE TABLE classroom (
-- classroom_id SERIAL PRIMARY KEY,
-- owner_id INTEGER REFERENCES users(id),
-- title TEXT,
-- subject TEXT,
-- active BOOLEAN,
-- password TEXT
-- )

-- CREATE TABLE student (
--     id SERIAL PRIMARY KEY,
--     classroom_id INTEGER REFERENCES classroom(classroom_id),
--     user_id INTEGER REFERENCES users(id)
-- )

-- CREATE TABLE questions (
--     question_id SERIAL PRIMARY KEY,
--     quiz_id INTEGER REFERENCES quiz(quiz_id),
--     question TEXT,
--     answer TEXT,
--     dummy_data_a TEXT,
--     dummy_data_b TEXT,
--     dummy_data_c TEXT
-- )

-- CREATE TABLE quiz (
--     quiz_id SERIAL PRIMARY KEY,
--     classroom_id INTEGER REFERENCES classroom(classroom_id),
--     quiz_name TEXT
-- )

-- CREATE TABLE results (
--     results_id SERIAL PRIMARY KEY,
--     question_id INTEGER REFERENCES questions(question_id),
--     user_answer TEXT,
--     correct BOOLEAN,
--     user_id INTEGER REFERENCES users(id),
--     deck_id INTEGER REFERENCES quiz(quiz_id)
-- )

-- INSERT INTO quiz(classroom_id, quiz_name)
-- VALUES (35, 'Unnecessary Functions'),
-- (35, 'Triangle Methods'),
-- (26, 'Greetings'),
-- (28, 'Photosynthesis')

-- INSERT INTO questions (quiz_id, question, answer, dummy_data_a, dummy_data_b, dummy_data_c)
-- VALUES (62, 'How old is Sampson?', '4 years old', '16 years old', '7 years old','10 years old'),
-- (62, 'How old is Quincy?', '5 years old', '16 years old', '4 years old','10 years old'),
-- (62, 'How old is Minnie?', '1 year old', '16 years old', '4 years old','10 years old'),
-- (62, 'How old is Steven?', '25 years old', '18 years old', '34 years old','28 years old'),
-- (62, 'How old is Larry?', '27 years old', '22 years old', '40 years old','31 years old'),
-- (62, 'How old is Jin?', '26 years old', '28 years old', '30 years old','24 years old'),
-- (63, 'Which is a type of triangle?', 'acute', 'cute', 'hour','mouse'),
-- (63, 'Which is a type of triangle?', 'obtuse', 'wide', 'round','car'),
-- (63, 'Which is a type of triangle?', 'right', 'small', 'tall','ball'),
-- (64, 'Ni hao ma?', 'How are you?', 'Yooooooo', 'goodbye','adios'),
-- (64, 'Ni hao', 'hello', 'good morning', 'round','car'),
-- (64, 'Wei?', 'Hello?', 'small', 'tall','ball'),
-- (64, 'Nin hao', 'hello (formal)', 'Yoooo', 'odd','normal'),
-- (64, 'Nimen hao?', 'hello (group)', 'weird', 'hola','mark'),
-- (65, 'Which is the powerhouse of the cell?', 'mitochondria', 'osmosis', 'plasma','plankton'),
-- (65, 'How do plants grow?', 'photosynthesis', 'recharging', 'grass','up'),
-- (65, 'What is inside of a plant?', 'chlorophyll', 'green stuff', 'plasma','bark'),
-- (65, 'What is a greenhouse?', 'A windowed shelter for plants', 'weird', 'orange clock','potato'),
-- (65, 'What color is southern dirt?', 'red', 'dark brown', 'blue','purple'),
-- (65, 'What is precipitation?', 'water', 'tears from clouds', 'ice cubes','hot water')

-- INSERT INTO student(classroom_id, user_id)
-- VALUES(35, 35),
-- (35, 36),
-- (35, 37),
-- (26, 36),
-- (26, 37),
-- (26, 38),
-- (28, 35),
-- (28, 37),
-- (28, 38)

-- INSERT INTO results(question_id, user_answer, correct, user_id, deck_id)
-- VALUES (24, '4 years old', true, 35, 62), 
-- (24, '4 years old', true, 36, 62),
-- (24, '4 years old', true, 37, 62),
-- (25, '10 years old', false, 35, 62),
-- (25, '4 years old', false, 36, 62),
-- (25, '5 years old', true, 37, 62),
-- (26, '4 years old', true, 35, 62),
-- (26, '1 year old', true, 36, 62),
-- (26, '1 year old', true, 37, 62),
-- (27, '25 years old', true, 35, 62),
-- (27, '25 years old', true, 36, 62),
-- (27, '25 years old', true, 37, 62),
-- (28, '27 years old', true, 35, 62),
-- (28, '27 years old', true, 36, 62),
-- (28, '27 years old', true, 37, 62),
-- (29, '28 years old', false, 35, 62),
-- (29, '28 years old', false, 36, 62),
-- (29, '28 years old', false, 37, 62)