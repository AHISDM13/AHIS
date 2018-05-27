import axios from "axios";

const initialState = {
  classRooms: [],
  currentClassroom: {}
};
const GET_CLASSROOM = "GET_CLASSROOM";
const SUBMIT_CLASSROOM = "SUBMIT_CLASSROOM";
const GET_OWNER_CLASSES = "GET_OWNER_CLASSES";

export default function classRoomReducer(state = initialState, action) {
  switch (action.type) {
    case `${SUBMIT_CLASSROOM}_FULFILLED`:
      return Object.assign({}, state, { classRooms: action.payload.data });

    case `${GET_OWNER_CLASSES}_FULFILLED`:
      return Object.assign({}, state, { classRooms: action.payload.data });

    case `${GET_CLASSROOM}_FULFILLED`:
      return {
        ...state,
        currentClassroom: action.payload.data
      };
    default:
      return state;
  }
}
export function getClassroom(classroom_id) {
  return {
    type: GET_CLASSROOM,
    payload: axios.get(`/api/classroom/${classroom_id}`)
  };
}
export function submitClassRoom(ownerid, className, password, subject) {
  return {
    type: SUBMIT_CLASSROOM,
    payload: axios.post("/api/classroom", {
      ownerid,
      className,
      password,
      subject
    })
  };
}

export function getOwnerClasses(ownerid) {
  return {
    type: GET_OWNER_CLASSES,
    payload: axios.get(`/api/classes/${ownerid}`)
  };
}
