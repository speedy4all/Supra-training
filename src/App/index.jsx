import axios from "axios";
import { useCallback, useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import About from "../containers/About";
import Form from "../containers/Form";
import List from "../containers/List";
import { useNavigationContext } from "../context";

const routes = () => ({
  about: <About />,
  list: <List />,
  form: <Form />,
});

function App() {

  const { navigationState: { path }, navigateTo } = useNavigationContext();
  return (
    <>
      <Header className="app-header">
        <button onClick={() => navigateTo("about")}>About</button>
        <button onClick={() => navigateTo("list")}>List</button>
      </Header>
      <Content>
        {routes()[path]}
      </Content>
    </>
  );
}

export default App;
