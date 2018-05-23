import axios from "axios";

const initialState = {
  classRoom: []
};

const SUBMIT_CLASSROOM = "SUBMIT_CLASSROOM";
const GET_CLASSROOM = "GET_CLASSROOM";

function classRoomReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_CLASSROOM:
      return Object.assign({}, state, { classRoom: action.payload });

    case `${GET_CLASSROOM}_FULFILLED`:
      return Object.assign({}, state, { classRoom: action.payload.data });
    default:
      return state;
  }
}

export default classRoomReducer;

export function submitClassRoom(className, password, subject) {
  return {
    type: SUBMIT_CLASSROOM,
    payload: axios.post("/api/classroom", {
      className,
      password,
      subject
    })
  };
}

export function getClassroom(ownerid) {
  return {
    type: GET_CLASSROOM,
    payload: axios.get(`/api/classroom/${ownerid}`)
  };
}
