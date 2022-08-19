import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigateTo } from "../../App/actions";
import { UserView } from "../../components/User";
import { fetchUser, saveUser } from "./actions";
import "./style.css";

export default function Form() {
  const dispatch = useDispatch();
  const { id, state } = useSelector((store) => ({
    id: store.root.data?.id,
    state: store.userForm,
  }));

  const { user, loading, error } = state;

  const [viewMode, setViewMode] = useState("readonly");

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id]);

  const editHandler = useCallback(() => {
    setViewMode("edit");
  }, []);

  const saveUserHandler = useCallback((payload) => {
    dispatch(saveUser(payload));
  }, []);

  const cancelEditHandler = useCallback(() => {
    setViewMode("readonly");
  }, []);

  const goBackHandler = useCallback(() => {
    dispatch(navigateTo("list"));
  }, [navigateTo]);

  const readonly = useMemo(() => viewMode === "readonly", [viewMode]);

  if (loading && !user.id) {
    return "Loading...";
  }

  if(error) {
    return error;
  }

  return (
    <UserView
      key={viewMode}
      user={user}
      readonly={readonly}
      loading={loading}
      saveUserHandler={saveUserHandler}
      cancelEditHandler={cancelEditHandler}
      editHandler={editHandler}
      goBackHandler={goBackHandler}
    />
  );
}
