import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./constants";

export const fetchUsers = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (data) => ({
  type: FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchUsersError = (err) => ({
  type: FETCH_USERS_ERROR,
  payload: err,
});
