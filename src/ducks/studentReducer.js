import axios from "axios";

const initialState = {
  currentTestResult: []
};

const GET_RESULT = "GET_RESULT";
export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_RESULT}_FULFILLED`:
      return {
        ...state,
        currentTestResult: action.payload.data
      };
    default:
      return state;
  }
}

export function getResult(quiz_id) {
  return {
    type: GET_RESULT,
    payload: axios.get(`/api/result/${quiz_id}`)
  };
}
