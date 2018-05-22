import axios from "axios";

const initialState = {
  classRoom: []
};

const SUBMIT_CLASSROOM = "SUBMIT_CLASSROOM";

function reducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_CLASSROOM:
      return Object.assign({}, state, { classRoom: action.payload });
  }
}

export default reducer;

export function submitClassRoom(className, password, subject) {
  return {
    type: SUBMIT_CLASSROOM,
    payload: axios.post("/api/class", {
      className,
      password,
      subject
    })
  };
}
