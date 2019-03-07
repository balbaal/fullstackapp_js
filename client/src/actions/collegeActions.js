import { GET_COLLEGES, DELETE_COLLEGE, ADD_COLLEGE } from "./types";

export const getColleges = () => {
  return {
    type: GET_COLLEGES
  };
};
