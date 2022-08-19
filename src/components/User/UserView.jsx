import React, { useCallback, useEffect, useMemo, useState } from "react";
import { saveUser } from "../../api";
import FormButtons from "../FormButtons";
import FormHeader from "../FormHeader";
import Friends from "../Friends";
import Tags from "../Tags";
import UserDetails from "../UserDetails";

export default function UserView({
  user,
  readonly,
  loading,
  saveUserHandler,
  cancelEditHandler,
  editHandler,
  goBackHandler,
}) {
  const [formValues, setFormValues] = useState({ ...user });

  useEffect(() => {
    setFormValues(user);
  }, [user]);

  const onChange = useCallback(({ target: { value, name } }) => {
    setFormValues((old) => ({ ...old, [name]: value }));
  }, []);

  const onSave = useCallback(() => {
    saveUserHandler(formValues);
  }, [saveUserHandler, formValues]);

  return (
    <div className="form">
      <FormHeader
        editHandler={editHandler}
        readonly={readonly}
        goBackHandler={goBackHandler}
      />

      <UserDetails user={formValues} readonly={readonly} onChange={onChange} />
      <Friends friends={formValues.friends} readonly={readonly} />
      <Tags tags={formValues.tags} readonly={readonly} onChange={onChange} />

      <FormButtons
        readonly={readonly}
        loading={loading}
        saveHandler={onSave}
        cancelHandler={cancelEditHandler}
      />
    </div>
  );
}
