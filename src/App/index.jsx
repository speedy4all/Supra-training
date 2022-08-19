import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Content from "../components/Content";
import Header from "../components/Header";
import About from "../containers/About";
import Form from "../containers/Form";
import List from "../containers/List";

function App() {
  const navigate = useNavigate();
  const [singlePage, setSinglePage] = useState(false);

  return (
    <>
      <Header className="app-header">
        <button onClick={() => setSinglePage((old) => !old)}>
          {(singlePage && "Nested page mode") || "Single page mode"}
        </button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/users")}>List</button>
      </Header>
      <Content>
        <Routes>
          <Route path="/">
            <Route path="about" element={<About />} />
            <Route path="users" element={<List singlePage={singlePage} />}>
              <Route path=":id" element={<Form />} />
            </Route>
            <Route path="user/:id" element={<Form />} />
          </Route>
        </Routes>
      </Content>
    </>
  );
}

export default App;
