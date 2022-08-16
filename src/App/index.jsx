import axios from "axios";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import About from "../containers/About";
import Form from "../containers/Form";
import List from "../containers/List";
const API = "http://localhost:3000";

const fetchUsers = async () => {
  const resp = await axios.get(`${API}/users`);
  return resp.data;
};

const routes = (args = {}) => ({
  about: <About {...args} />,
  list: <List {...args} />,
  form: <Form {...args} />,
});

function App() {
  const [path, setPath] = useState("about");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <>
      <Header className="app-header">
        <button onClick={() => setPath("about")}>About</button>
        <button onClick={() => setPath("list")}>List</button>
        <button onClick={() => setPath("form")}>Form</button>
      </Header>
      <Content>{routes({ path })[path]}</Content>
      {users.map((user) => (
        <div key={user._id}>
          {user.name} {user.age}
        </div>
      ))}
    </>
  );
}

export default App;
