import { configureStore } from "@reduxjs/toolkit";
import middlewares from "./middlewares";
import reducer from './reducers';

export const store = configureStore({
  reducer,
  middleware: [...middlewares],
});
