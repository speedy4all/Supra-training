import usersMiddleware from "./containers/List/middleware";
import userFormMiddleware from "./containers/Form/middleware";
// import createSagaMiddleware from 'redux-saga';

// const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run();

export default [...usersMiddleware, ...userFormMiddleware];
