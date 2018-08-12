const express = require("express");
const app = express();
const path = require("path");
// USE FOR PRODUCTION

require("dotenv").config();
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
// console.log(__dirname);

var socket = require("socket.io");

const cc = require("./controllers/classRCtrl");
const qc = require("./controllers/quizCtrl");
const rec = require("./controllers/resourceCtrl");
const ac = require("./controllers/userCtrl");
const sc = require("./controllers/studentCtrl");
const rc = require("./controllers/resultCtrl");
const port = process.env.PORT || 3001;

// app.use(express.static(path.join(__dirname, "../build")));

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log(err));

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }
  })
);

// AUTH ENDPOINTS
app.post("/api/user", ac.addNewUser);
app.get('/api/user/userinfo',ac.getUserInfo)
app.get("/api/user/:email", ac.getUser);
app.put("/api/user/:id", ac.updateUser);
//CLASS ROOM ENDPOINTS
app.get("/api/classrooms");
app.get("/api/classlist/:user_id", cc.getStudentClasses);
app.get("/api/classroom/:classroom_id", sc.getClassroom);
app.get('/api/classroom/classroominfo',sc.getClassroomInfo)
app.get("/api/search/:keyword", cc.getClassesByKeywords);
app.get("/api/classes/:owner_id", cc.getOwnerClasses);
app.get("/api/joinedClasses/:user_id", cc.getStudentClasses);
app.post("/api/classroom", cc.submitClassRoom);
app.put("/api/classroom/:id");
app.delete("/api/classroom/:id");

//QUIZ ENDPOINTS
app.post("/api/quiz", qc.createQuiz);
app.get("/api/quiz/:classid", qc.getQuiz);
app.get("/api/quizs/:classroom_id", sc.getQuizsByClassroomID);

//QUESTION ENDPOINTS
app.post("/api/question", qc.addQuestion);
app.get("/api/question/:quiz_id", qc.getQuestions);
app.put("/api/question", qc.updateQuestion);
app.delete("/api/question/:id/:quiz_id", qc.deleteQuestion);

///STUDENT ENPOINTS
app.post("/api/student/:classroom_id", sc.addStudentToClasses);

//RESULT ENDPOINTS
app.post("/api/result", rc.addResult);
app.get("/api/result/:quiz_id", rc.getResult);
app.get(
  `/api/studentresult/:user_id/:classroom_id`,
  rc.getStudentResultForAllQuizzes
);
app.get(`/api/classresult/:classroom_id`, rc.getClassQuizResults);
app.get(`/api/studentquizresult/:classroom_id`, rc.getStudentQuizResults);

app.get("/api/resources/:classroom_id", rec.getAllResources);
app.post("/api/resource", rec.addNewResource);
// USE FOR PRODUCTION
// app.get("*", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//SOCKET STUFFS

// io = socket(server);

// io.on("connection", socket => {
//   console.log(socket.id);

//   socket.on("SEND_MESSAGE", function(data) {
//     io.emit("RECEIVE_MESSAGE", data);
//   });
// });
