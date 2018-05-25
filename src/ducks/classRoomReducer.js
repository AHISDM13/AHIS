import axios from "axios";

const initialState = {
  classRooms: [],
  classRoom: {}
};

const SUBMIT_CLASSROOM = "SUBMIT_CLASSROOM";
const GET_OWNER_CLASSES = "GET_OWNER_CLASSES";

export default function classRoomReducer(state = initialState, action) {
  switch (action.type) {
    case `${SUBMIT_CLASSROOM}_FULFILLED`:
      return Object.assign({}, state, { classRooms: action.payload.data });

<<<<<<< HEAD
    case `${GET_CLASSROOM}_FULFILLED`:
      console.log(action);
      return Object.assign({}, state, { classRoom: action.payload.data });
=======
    case `${GET_OWNER_CLASSES}_FULFILLED`:
      return Object.assign({}, state, { classRooms: action.payload.data });
>>>>>>> master
    default:
      return state;
  }
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

<<<<<<< HEAD
export function getClassroom() {
  return {
    type: GET_CLASSROOM,
    payload: axios.get(`/api/classroom/2`)
=======
export function getOwnerClasses(ownerid) {
  return {
    type: GET_OWNER_CLASSES,
    payload: axios.get(`/api/classes/${ownerid}`)
>>>>>>> master
  };
}
