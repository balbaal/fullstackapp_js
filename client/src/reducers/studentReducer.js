import { ADD_STUDENT, GET_STUDENTS, DELETE_STUDENT } from "../actions/types";
import { addStudent } from "../actions/studentActions";

const initialState = {
  students: [
    {
      identification_number: "13020140099",
      name: "Iqbal Syafri",
      college: "Hasanuddin University",
      majoring: "Informatics Eng",
      year: "2015"
    },
    {
      identification_number: "13020140092",
      name: "Luthfi Al",
      college: "Hasanuddin University",
      majoring: "Informatics Eng",
      year: "2015"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          student => student.identification_number !== action.payload
        )
      };

    case ADD_STUDENT:
      // return {
      //   students: state.students.push(action.payload),
      //   ...state
      // };

      return {
        ...state,
        students: [action.payload, ...state.students]
      };

    default:
      return state;
  }
}
