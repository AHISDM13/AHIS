import axios from "axios";

const initialState = {
  searchResults: []
};

const GET_CLASSES_BY_KEYWORD = "GET_CLASSES_BY_KEYWORD";

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CLASSES_BY_KEYWORD}_FULFILLED`:
      return {
        ...state,
        searchResults: action.payload.data
      };
    default:
      return state;
  }
}

export function getClassesByKeyword(keyword) {
  return {
    type: GET_CLASSES_BY_KEYWORD,
    payload: axios.get(`/api/search/${keyword}`)
  };
}
