const express = require("express");
const app = express();
const path = require("path");
// app.use(express.static(path.join(__dirname, "../build")));

require("dotenv").config();
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
// console.log(__dirname);

const cc = require("./controllers/classRCtrl");
const qc = require("./controllers/quizCtrl");

const ac = require("./controllers/userCtrl");
const sc = require("./controllers/studentCtrl");
const port = process.env.PORT || 3001;

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.use(json());
app.use(cors());

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 100000
//     }
//   })
// );

// AUTH ENDPOINTS
app.post("/api/user", ac.addNewUser);
app.get("/api/user/:email", ac.getUser);
app.put("/api/user/:id", ac.updateUser);
//CLASS ROOM ENDPOINTS
app.get("/api/classrooms");
app.get("/api/classroom/:classroom_id", sc.getClassroom);
app.get("/api/classes/:keyword", cc.getClassesByKeywords);
app.get("/api/classes/:owner_id", cc.getOwnerClasses);
app.post("/api/classroom", cc.submitClassRoom);
app.put("/api/classroom/:id");
app.delete("/api/classroom/:id");

//QUIZ ENDPOINTS
app.post("/api/quiz", qc.createQuiz);
app.get("/api/quiz/:classid", qc.getQuiz);

//QUESTION ENDPOINTS
app.post("/api/question", qc.addQuestion);
app.get("/api/question/:quiz_id", qc.getQuestions);

///STUDENT ENPOINTS
app.post("/api/student/:classroom_id/:user_id", sc.addStudentToClasses);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
