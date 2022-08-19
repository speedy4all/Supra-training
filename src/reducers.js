import rootReducer from "./App/reducer";
import userFormReducer from "./containers/Form/reducer";
import userListReducer from "./containers/List/reducer";

export default {
    root: rootReducer,
    users: userListReducer,
    userForm: userFormReducer,
};