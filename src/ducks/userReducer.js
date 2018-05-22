const GET_USER = "GET_USER";
const initialState = {
  users: [],
  user: {}
};

export function getUser(user) {
  return {
    type: GET_USER,
    payload: user
  };
}
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
