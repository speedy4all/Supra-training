import userFormReducer from "./containers/Form/reducer";
import userListReducer from "./containers/List/reducer";

export default {
    users: userListReducer,
    userForm: userFormReducer,
};