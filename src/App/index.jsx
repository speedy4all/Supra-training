import { useDispatch, useSelector } from "react-redux";
import Content from "../components/Content";
import Header from "../components/Header";
import About from "../containers/About";
import Form from "../containers/Form";
import List from "../containers/List";
import { navigateTo } from "./actions";

const routes = () => ({
  about: <About />,
  list: <List />,
  form: <Form />,
});

function App() {
  const path = useSelector((store) => store.root.path);
  const dispatch = useDispatch();
  
  return (
    <>
      <Header className="app-header">
        <button onClick={() => dispatch(navigateTo("about"))}>About</button>
        <button onClick={() => dispatch(navigateTo("list"))}>List</button>
      </Header>
      <Content>
        {routes()[path]}
      </Content>
    </>
  );
}

export default App;
