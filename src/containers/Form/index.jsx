import React, { useCallback, useEffect, useMemo, useState } from "react";
import { fetchUser, saveUser } from "../../api";
import { UserView } from "../../components/User";
import "./style.css";

export default function Form({ id, navigateTo }) {
  const [user, setUser] = useState(null);
  const [viewMode, setViewMode] = useState("readonly");

  useEffect(() => {
    fetchUser(id).then((data) => setUser(data));
  }, [id]);

  const editHandler = useCallback(() => {
    setViewMode("edit");
  }, []);

  const saveUserHandler = useCallback((payload) => {
    saveUser(payload).then((resp) => setUser(resp));
  }, []);

  const cancelEditHandler = useCallback(() => {
    setViewMode("readonly");
  }, []);

  const goBackHandler = useCallback(() => {
    navigateTo("list");
  }, [navigateTo]);

  const readonly = useMemo(() => viewMode === "readonly", [viewMode]);

  if (!user) {
    return "Loading...";
  }

  return (
    <UserView
      key={viewMode}
      user={user}
      readonly={readonly}
      saveUserHandler={saveUserHandler}
      cancelEditHandler={cancelEditHandler}
      editHandler={editHandler}
      goBackHandler={goBackHandler}
    />
  );
}
