import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./constants";
import { produce } from "immer";

export const initialState = {
  data: [],
  loading: false,
  error: "",
};

export default function userListReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        draft.loading = true;
        draft.error = "";
        break;
      case FETCH_USERS_SUCCESS:
        draft.data = action.payload;
        draft.error = "";
        draft.loading = false;
        break;
      case FETCH_USERS_ERROR:
        draft.data = [];
        draft.loading = false;
        draft.error = action.payload;
        break;
      default:
        break;
    }
  });
}
