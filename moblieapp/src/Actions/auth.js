import authapi from "../Api/authapi";
import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await authapi.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};
