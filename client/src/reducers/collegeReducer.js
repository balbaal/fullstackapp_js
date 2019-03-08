import { GET_COLLEGES, ADD_COLLEGE, DELETE_COLLEGE } from "../actions/types";

const initialState = {
  colleges: [{ _id: "2987458", college: "University Of Indonesia" }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COLLEGES:
      return {
        ...state
      };

    case ADD_COLLEGE:
      return {
        ...state,
        colleges: [action.payload, ...state.colleges]
      };

    default:
      return state;
  }
}
