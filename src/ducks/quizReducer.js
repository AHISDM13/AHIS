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
      return Object.assign({}, state, { quiz: action.payload.data[0] });

    case `${GET_QUIZ}_FULFILLED`:
      return Object.assign({}, state, { quiz: action.payload.data });

    case ADD_QUESTION:
      return Object.assign({}, state, { question: action.payload });

    case GET_QUESTIONS:
      return Object.assign({}, state, { question: action.payload.data });

    default:
      return state;
  }
}

export default quizReducer;

export function createQuiz(classroom_id, quiz_name, quiz_type) {
  return {
    type: CREATE_QUIZ,
    payload: axios.post(`/api/quiz`, { classroom_id, quiz_name, quiz_type })
  };
}

export function getQuiz(classid) {
  return {
    type: GET_QUIZ,
    payload: axios.get(`/api/quiz/${classid}`)
  };
}

export function addQuestion(
  quiz_id,
  question,
  answer,
  dummy_data_a,
  dummy_data_b,
  dummy_data_c
) {
  return {
    type: ADD_QUESTION,
    payload: axios.post(`/api/question`, {
      quiz_id,
      question,
      answer,
      dummy_data_a,
      dummy_data_b,
      dummy_data_c
    })
  };
}

export function getQuestions(quizid) {
  return {
    type: GET_QUESTIONS,
    payload: axios.get(`/api/question/${quizid}`)
  };
}
