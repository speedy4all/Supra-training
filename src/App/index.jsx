import { useMemo, useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
let renderCount = 1;

function App() {
    console.log(`App re-render count: ${renderCount}`);
    renderCount++;

  const [state, setState] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  const haderContent = () => {
    return (
      <p className="header-paragraph">
        This is my header child {currentDate.toISOString()}
      </p>
    );
  }

  return (
    <>
      <Header key="header" className="app-header">
        {haderContent}
      </Header>
      <button onClick={() => setState(!state)}>Toggle content</button>
      <button onClick={() => setCurrentDate(new Date())}>Set current date</button>
      {state && <Content />}
    </>
  );
}

export default App;
