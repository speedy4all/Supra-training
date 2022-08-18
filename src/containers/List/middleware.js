import { fetchUsers } from "../../api";
import { fetchUsersError, fetchUsersSuccess } from "./actions";
import { FETCH_USERS_REQUEST } from "./constants";

const fetchUsersRequest =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === FETCH_USERS_REQUEST) {
      fetchUsers()
        .then((data) => {
          dispatch(fetchUsersSuccess(data));
        })
        .catch((e) => dispatch(fetchUsersError(e.message)));
    }
  };

export default [fetchUsersRequest];
