import usersMiddleware from "./containers/List/middleware";
import userFormMiddleware from "./containers/Form/middleware";

export default [...usersMiddleware, ...userFormMiddleware];
