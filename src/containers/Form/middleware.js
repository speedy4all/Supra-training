import { fetchUser, saveUser } from "../../api";
import {
  fetchUserError,
  fetchUserSuccess,
  saveUserError,
  saveUserSuccess,
} from "./actions";
import { FETCH_USER_REQUEST, SAVE_USER_REQUEST } from "./constants";
import { takeLatest, call, all, put } from "redux-saga/effects";
import { fetchUsers } from "../List/actions";

export function* fetchUserRequestHandler(action) {
  try {
    const user = yield call(fetchUser, action.payload);
    yield put(fetchUserSuccess(user));
  } catch (e) {
    yield put(fetchUserError(e.message));
  }
}

export function* fetchUserRequest() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserRequestHandler);
}

export function* saveUserRequestHandler(action) {
  try {
    const user = yield call(saveUser, action.payload);
    yield put(saveUserSuccess(user));
    if (action.meta?.reloadList) {
      yield put(fetchUsers());
    }
  } catch (e) {
    yield put(saveUserError(e.message));
  }
}

export function* saveUserRequest() {
  yield takeLatest(SAVE_USER_REQUEST, saveUserRequestHandler);
}

export default function* userFormRootSaga() {
  yield all([fetchUserRequest(), saveUserRequest()]);
}
