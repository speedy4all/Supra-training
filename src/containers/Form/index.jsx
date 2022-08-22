import React, { useCallback, useEffect, useMemo, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UserView } from "../../components/User";
import { fetchUser, saveUser } from "./actions";
import "./style.css";

function Form({ singlePage, state, dispatch }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const { user, loading, error } = state;

  const [viewMode, setViewMode] = useState("readonly");

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [id]);

  const editHandler = useCallback(() => {
    setViewMode("edit");
  }, []);

  const saveUserHandler = useCallback(
    (payload) => {
      dispatch(saveUser(payload, !singlePage));
    },
    [singlePage]
  );

  const cancelEditHandler = useCallback(() => {
    setViewMode("readonly");
  }, []);

  const goBackHandler = useCallback(() => {
    navigate("/users");
  }, []);

  const readonly = useMemo(() => viewMode === "readonly", [viewMode]);

  if (loading && !user.id) {
    return "Loading...";
  }

  if (error) {
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

const mapDisptachToProps = (dispatch) => {
  return {
    dispatch,
  };
};

const mapStateToProps = (store) => {
  return {
    state: store.userForm,
  };
};

export default connect(mapStateToProps, mapDisptachToProps)(Form);
