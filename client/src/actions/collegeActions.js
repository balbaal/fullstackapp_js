import { GET_COLLEGES, DELETE_COLLEGE, ADD_COLLEGE } from "./types";

import axios from "axios";
import { setLoading } from "./loadingActions";

export const getColleges = () => dispatch => {
  dispatch(setLoading());
  axios.get("/api/college").then(res =>
    dispatch({
      type: GET_COLLEGES,
      payload: res.data.message
    })
  );
};

export const deleteCollege = id => dispatch => {
  axios.delete(`/api/college/${id}`).then(res =>
    dispatch({
      type: DELETE_COLLEGE,
      payload: id
    })
  );
};

export const addCollege = data => dispatch => {
  axios.post("/api/college", data).then(res =>
    dispatch({
      type: ADD_COLLEGE,
      payload: res.data.message
    })
  );
};
