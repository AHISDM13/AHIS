import axios from "axios";

const initialState = {
  searchResults: [],
  files: [],
  isLoading: false
};

const GET_CLASSES_BY_KEYWORD = "GET_CLASSES_BY_KEYWORD";
const ADD_NEW_FILE = "ADD_NEW_FILE";
const GET_ALL_FILES = "GET_ALL_FILES";

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CLASSES_BY_KEYWORD}_FULFILLED`:
      return {
        ...state,
        searchResults: action.payload.data
      };
    case `${ADD_NEW_FILE}_FULFILLED`:
      return {
        ...state,
        files: action.payload.data
      };
    case `${GET_ALL_FILES}_PENDING`:
      return {
        ...state,
        isLoading: true
      };

    case `${GET_ALL_FILES}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        files: action.payload.data
      };

    default:
      return state;
  }
}
export function getAllFiles(classroom_id) {
  return {
    type: GET_ALL_FILES,
    payload: axios.get(`/api/resources/${classroom_id}`)
  };
}
export function addNewFile(classroom_id, file_name) {
  return {
    type: ADD_NEW_FILE,
    payload: axios.post(`/api/resource`, { classroom_id, file_name })
  };
}
export function getClassesByKeyword(keyword) {
  return {
    type: GET_CLASSES_BY_KEYWORD,
    payload: axios.get(`/api/search/${keyword}`)
  };
}
