import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import classRoomReducer from "./ducks/classRoomReducer";
import quizReducer from "./ducks/quizReducer";
import userReducer from "./ducks/userReducer";
import searchReducer from "./ducks/searchReducer";
import studentReducer from "./ducks/studentReducer";
const store = createStore(
  combineReducers({
    userReducer,
    classRoomReducer,
    quizReducer,
    searchReducer,
    studentReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
