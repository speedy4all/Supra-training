import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./actions";

const UserListContext = createContext();

export function useUserListContext() {
  return useContext(UserListContext);
}

export default function UserListProvider({ children }) {
  const state = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const getUsers = useCallback(() => {
    dispatch(fetchUsers());
  }, []);

  const providerValue = useMemo(() => ({ state, getUsers }), [state]);

  return (
    <UserListContext.Provider value={providerValue}>
      {children}
    </UserListContext.Provider>
  );
}
