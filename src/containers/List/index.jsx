import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./actions";
import Table from "../../components/Table";
import { injectProvider, useNavigationContext } from "../../context";
import UserListProvider, { useUserListContext } from "./UserListProvider";

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

function List() {
  const { navigateTo } = useNavigationContext();
  const { state, getUsers } = useUserListContext();

  const { data, error, loading } = state;

  useEffect(() => {
    getUsers();
  }, []);


  const onRowClick = useCallback(({ id }) => navigateTo("form", { id }), []);

  if (error) {
    return error;
  }

  if (loading) {
    return "Loading... Please wait a sec :)";
  }

  return <Table data={data} columns={columns} onRowClick={onRowClick} />;
}

export default injectProvider(List, UserListProvider);
