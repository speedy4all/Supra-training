import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);
