import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  SAVE_USER_ERROR,
  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
} from "./constants";

export function fetchUser(id) {
  return {
    type: FETCH_USER_REQUEST,
    payload: id,
  };
}

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
}

export function fetchUserError(err) {
  return {
    type: FETCH_USER_ERROR,
    payload: err,
  };
}

export function saveUser(user) {
  return {
    type: SAVE_USER_REQUEST,
    payload: user,
  };
}

export function saveUserSuccess(user) {
  return {
    type: SAVE_USER_SUCCESS,
    payload: user,
  };
}

export function saveUserError(err) {
  return {
    type: SAVE_USER_ERROR,
    payload: err,
  };
}
