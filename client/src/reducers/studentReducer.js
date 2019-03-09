import {
  ADD_STUDENT,
  GET_STUDENTS,
  DELETE_STUDENT,
  LOADING
} from "../actions/types";

const initialState = {
  students: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
        loading: false
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          student => student.identification_number !== action.payload
        )
      };

    case ADD_STUDENT:
      return {
        ...state,
        students: [action.payload, ...state.students]
      };

    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
