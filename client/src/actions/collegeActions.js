import { GET_COLLEGES, DELETE_COLLEGE, ADD_COLLEGE } from "./types";

export const getColleges = () => {
  return {
    type: GET_COLLEGES
  };
};

export const addCollege = data => {
  return {
    type: ADD_COLLEGE,
    payload: data
  };
};

export const deleteCollege = id => {
  return {
    type: DELETE_COLLEGE,
    payload: id
  };
};
