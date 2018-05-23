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

// const { submitClassRoom } = require(`${__dirname}/controllers/classRCtrl`);
const cc = require("./controllers/classRCtrl");

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
//CLASS ROOM ENDPOINTS
app.get("/api/classrooms");
app.get("/api/classroom/:ownerid", cc.getClassRoom);
app.post("/api/classroom", cc.submitClassRoom);
app.put("/api/classroom/:id");
app.delete("/api/classroom/:id");

//QUIZ ENDPOINTS
app.post("/api/quiz");
app.get("/api/quiz/:classid");

//QUESTION ENDPOINTS
app.post("/api/question");
app.get("/api/question/:quizid");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
