import axios from "axios";

const initialState = {
  quiz: [],
  question: []
};

const CREATE_QUIZ = "CREATE_QUIZ";
const GET_QUIZ = "GET_QUIZ";

const ADD_QUESTION = "ADD_QUESTION";
const GET_QUESTIONS = "GET_QUESTIONS";

function quizReducer(state = initialState, action) {
  switch (action.type) {
    case `${CREATE_QUIZ}_FULFILLED`:
      return Object.assign({}, state, { quiz: action.payload });

    case GET_QUIZ:
      return Object.assign({}, state, { quiz: action.payload.data });

    case ADD_QUESTION:
      return Object.assign({}, state, { question: action.payload });

    case GET_QUESTIONS:
      return Object.assign({}, state, { question: action.payload.data });

    default:
      return state;
  }
}

export default createQuiz;

export function createQuiz(classid, quizName) {
  return {
    type: CREATE_QUIZ,
    payload: axios.post(`/api/quiz`, { classid, quizName })
  };
}

export function getQuiz(classid) {
  return {
    type: GET_QUIZ,
    payload: axios.get(`/api/quiz/${classid}`)
  };
}

export function addQuestion(
  quizid,
  question,
  answer,
  dummydata_a,
  dummydata_b,
  dummydata_c
) {
  return {
    type: ADD_QUESTION,
    payload: axios.post(`/api/question`, {
      quizid,
      question,
      answer,
      dummydata_a,
      dummydata_b,
      dummydata_c
    })
  };
}

export function getQuestions(quizid) {
  return {
    type: GET_QUESTIONS,
    payload: axios.get(`/api/question/${quizid}`)
  };
}
