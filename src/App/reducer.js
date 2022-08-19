import produce from "immer";
import { NAVIGATE } from "./constants";

const initialState = {
  path: "about",
  data: null,
};

export default function rootReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case NAVIGATE:
        draft.path = action.payload;
        draft.data = action.meta;
        break;
      default:
        break;
    }
  });
}
