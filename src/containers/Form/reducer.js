import produce from "immer";
import {
  FETCH_USER_ERROR,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  SAVE_USER_ERROR,
  SAVE_USER_REQUEST,
  SAVE_USER_SUCCESS,
} from "./constants";

const initialState = {
  user: {},
  loading: false,
  error: "",
};

export default function userFormReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
      case SAVE_USER_REQUEST:
        draft.loading = true;
        draft.error = "";
        break;
      case FETCH_USER_SUCCESS:
      case SAVE_USER_SUCCESS:
        draft.user = action.payload;
        draft.loading = false;
        draft.error = "";
        break;
      case FETCH_USER_ERROR:
      case SAVE_USER_ERROR:
        draft.user = {};
        draft.loading = false;
        draft.error = action.payload;
        break;
      default:
        break;
    }
  });
}
