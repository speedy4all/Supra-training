import React, { useCallback, useEffect } from "react";
import Table from "../../components/Table";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchUsers } from "./actions";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  {
    label: "Name",
    dataIndex: "name",
  },
  {
    label: "Age",
    dataIndex: "age",
  },
  {
    label: "Email",
    dataIndex: "email",
  },
  {
    label: "Phone",
    dataIndex: "phone",
  },
  {
    label: "User state",
    render: ({ isActive }) =>
      isActive ? (
        <span style={{ color: "green" }}>Active</span>
      ) : (
        <strong style={{ color: "red" }}>Inactive</strong>
      ),
  },
  {
    label: "Friends",
    render: ({ friends }) => (
      <span>{friends?.map((f) => f.name).join(", ")}</span>
    ),
  },
  {
    label: "Hobbies",
    render: ({ tags }) => (
      <div style={{ display: "flex", flexDirection: "row" }}>
        {tags?.map((tag, index) => (
          <div
            key={`${tag}_${index}`}
            style={{
              padding: 3,
              backgroundColor: "lightgreen",
              margin: 5,
              borderRadius: 5,
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    ),
  },
];

function List({ singlePage }) {
  const navigate = useNavigate();
  const state = useSelector((store) => store.users);
  const dispatch = useDispatch();

  const { data, error, loading } = state;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const onRowClick = useCallback(
    ({ id }) => {
      if (singlePage) {
        navigate(`/user/${id}`);
      } else {
        navigate(`/users/${id}`);
      }
    },
    [singlePage]
  );

  if (error) {
    return error;
  }

  if (loading) {
    return "Loading... Please wait a sec :)";
  }

  return (
    <>
      <Outlet />
      <Table data={data} columns={columns} onRowClick={onRowClick} />
    </>
  );
}

export default List;
