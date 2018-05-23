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