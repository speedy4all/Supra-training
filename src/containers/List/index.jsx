import React, { useCallback, useEffect, useState } from "react";
import { fetchUsers } from "../../api";
import Table from "../../components/Table";

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
];

export default function List({ navigateTo }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  const onRowClick = useCallback(({ id }) => navigateTo("form", { id }), []);

  return <Table data={users} columns={columns} onRowClick={onRowClick} />;
}
