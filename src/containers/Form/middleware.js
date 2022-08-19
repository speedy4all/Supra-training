import { fetchUser, saveUser } from "../../api";
import { fetchUserError, fetchUserSuccess, saveUserSuccess } from "./actions";
import { FETCH_USER_REQUEST, SAVE_USER_REQUEST } from "./constants";

const fetchUserRequest =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === FETCH_USER_REQUEST) {
      if (action.payload) {
        fetchUser(action.payload).then((data) =>
          dispatch(fetchUserSuccess(data))
        );
      } else {
        dispatch(fetchUserError("No id provided"));
      }
    }
  };

const saveUserRequest =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === SAVE_USER_REQUEST) {
      saveUser(action.payload).then((data) => dispatch(saveUserSuccess(data)));
    }
  };

export default [fetchUserRequest, saveUserRequest];
