import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { fetchUsers as callUsersApi } from "../../api";
import { fetchUsers, fetchUsersError, fetchUsersSuccess } from "./actions";
import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./constants";
import userListReducer, { initialState } from "./reducer";

const UserListContext = createContext();

export function useUserListContext() {
  return useContext(UserListContext);
}

export default function UserListProvider({ children }) {
  const [state, dispatch] = useReducer(userListReducer, initialState);

  const getUsers = useCallback(() => {
    dispatch(fetchUsers());
    callUsersApi()
      .then((data) => {
        dispatch(fetchUsersSuccess(data));
      })
      .catch((e) => {
        dispatch(fetchUsersError(e.message));
      });
  }, []);

  const providerValue = useMemo(() => ({ state, getUsers }), [state]);

  return (
    <UserListContext.Provider value={providerValue}>
      {children}
    </UserListContext.Provider>
  );
}
