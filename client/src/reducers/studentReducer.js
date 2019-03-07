import { ADD_STUDENT, GET_STUDENTS, DELETE_STUDENT } from "../actions/types";

const initialState = {
  students: [
    {
      identification_number: "13020140099",
      name: "Iqbal Syafri",
      college: "Hasanuddin University",
      majoring: "Informatics Eng",
      year: "2015"
    },
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state
      };

    default:
      return state;
  }
}