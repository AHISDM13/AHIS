import axios from "axios";

const initialState = {
  currentTestResult: [],
  studentClassResults: [],
  classQuizResults: [],
  studentQuizResults: []
};

const GET_RESULT = "GET_RESULT";
const GET_STUDENT_CLASS_RESULTS = "GET_STUDENT_CLASS_RESULTS"; //one user's class results
const GET_CLASS_QUIZ_RESULTS = "GET_CLASS_QUIZ_RESULTS";
const GET_STUDENT_QUIZ_RESULTS = "GET_STUDENT_QUIZ_RESULTS";

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_RESULT}_FULFILLED`:
      return {
        ...state,
        currentTestResult: action.payload.data
      };
    case `${GET_STUDENT_CLASS_RESULTS}_FULFILLED`:
      return {
        ...state,
        studentClassResults: action.payload.data
      };

    case `${GET_CLASS_QUIZ_RESULTS}_FULFILLED`:
      return {
        ...state,
        classQuizResults: action.payload.data
      };

    case `${GET_STUDENT_QUIZ_RESULTS}_FULFILLED`:
      console.log("REDUCER", action.payload.data);
      return {
        ...state,
        studentQuizResults: action.payload.data
      };

    default:
      return state;
  }
  console.log("REDUCER", action.payload.data);
}

export function getResult(quiz_id) {
  return {
    type: GET_RESULT,
    payload: axios.get(`/api/result/${quiz_id}`)
  };
}

export function getStudentClassResults(user_id, classroom_id) {
  console.log(classroom_id);
  return {
    type: GET_STUDENT_CLASS_RESULTS,
    payload: axios.get(`/api/studentresult/${user_id}/${classroom_id}`)
  };
}

export function getStudentQuizResults(classroom_id) {
  return {
    type: GET_STUDENT_QUIZ_RESULTS,
    payload: axios.get(`/api/studentquizresult/${classroom_id}`)
  };
}

export function getClassQuizResults(classroom_id) {
  return {
    type: GET_CLASS_QUIZ_RESULTS,
    payload: axios.get(`/api/classresult/${classroom_id}`)
  };
}
