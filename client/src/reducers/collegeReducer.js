import {
  GET_COLLEGES,
  ADD_COLLEGE,
  DELETE_COLLEGE,
  COLLEGES_LOADING
} from "../actions/types";

const initialState = {
  colleges: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COLLEGES:
      return {
        ...state,
        colleges: action.payload,
        loading: false
      };

    case ADD_COLLEGE:
      return {
        ...state,
        colleges: [action.payload, ...state.colleges]
      };

    case DELETE_COLLEGE:
      return {
        ...state,
        colleges: state.colleges.filter(
          college => college._id !== action.payload
        )
      };

    case COLLEGES_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
