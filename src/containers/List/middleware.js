import { fetchUsers } from "../../api";
import { fetchUsersError, fetchUsersSuccess } from "./actions";
import { FETCH_USERS_REQUEST } from "./constants";

import {
  takeLatest,
  call,
  put,
  all,
} from "redux-saga/effects";

// const fetchUsersRequest =
//   ({ dispatch }) =>
//   (next) =>
//   (action) => {
//     next(action);

//     if (action.type === FETCH_USERS_REQUEST) {
//       fetchUsers()
//         .then((data) => {
//           dispatch(fetchUsersSuccess(data));
//         })
//         .catch((e) => dispatch(fetchUsersError(e.message)));
//     }
//   };

export function* fetchUsersRequestHandler() {
  try {
    const users = yield call(fetchUsers);
    yield put(fetchUsersSuccess(users));
  } catch (e) {
    yield put(fetchUsersError(e.message));
  }
}

export function* fetchUsersRequest() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersRequestHandler);
}

export default function* userListRootSaga() {
  yield all([fetchUsersRequest()]);
}
