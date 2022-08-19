import userListMiddleware from './containers/List/middleware';

export default function* allSagas() {
    yield userListMiddleware();
}