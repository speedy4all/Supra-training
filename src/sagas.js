import { all } from "redux-saga/effects";
import userListMiddleware from "./containers/List/middleware";
import userFormMiddleware from "./containers/Form/middleware";

export default function* allSagas() {
  yield all([userFormMiddleware(), userListMiddleware()]);
}
