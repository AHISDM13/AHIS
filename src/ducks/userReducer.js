import axios from "axios";
const GET_USER = "GET_USER";
const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";
const initialState = {
  users: [],
  user: {}
};

export function getUser(email) {
  return {
    type: GET_USER,
    payload: axios.get(`/api/user/${email}`)
  };
}
export function addUser(displayName, email) {
  return {
    type: ADD_USER,
    payload: axios.post("/api/user", { displayName, email })
  };
}

export function updateUser(firstname, lastname, email, id) {
  return {
    type: UPDATE_USER,
    payload: axios.put(`/api/user/${id}`, { firstname, lastname, email })
  };
}
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload
      };
    case `${UPDATE_USER}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        user: action.payload.data
      };
    default:
      return state;
  }
}
