import axios from "axios";
import { useCallback, useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import About from "../containers/About";
import Form from "../containers/Form";
import List from "../containers/List";

const routes = (args = {}) => ({
  about: <About {...args} />,
  list: <List {...args} />,
  form: <Form {...args} />,
});

function App() {
  const [navigationState, setNavigationState] = useState({
    path: "about",
    data: null,
  });

  const navigateTo = useCallback((path, data = {}) => {
    setNavigationState({ path, ...data });
  }, []);

  return (
    <>
      <Header className="app-header">
        <button onClick={() => navigateTo("about")}>About</button>
        <button onClick={() => navigateTo("list")}>List</button>
      </Header>
      <Content>
        {routes({ ...navigationState, navigateTo })[navigationState.path]}
      </Content>
    </>
  );
}

export default App;
