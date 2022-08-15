import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
let renderCount = 1;

function App() {
  console.log(`App re-render count: ${renderCount}`);
  renderCount++;

  const [state, setState] = useState();
  const [currentDate, setCurrentDate] = useState();
  const pRef = useRef(null);

  useEffect(() => {
    const oPClick = () => {
      console.log("paragraph chaged", pRef.current);
    };
    pRef.current.addEventListener("click", oPClick);

    return () => {
        if (pRef.current) {
            pRef.current.removeEventListener("click", oPClick);
        }
    }

  }, [currentDate]);

  // No State
  // All State
  // Some state

  const onStateChange = () => {
    setState(!state);
  };
  const onDateChange = () => {
    setCurrentDate(new Date());
  };

  return (
    <>
      <Header key="header" className="app-header">
        <p className="header-paragraph">
          This is my header child {currentDate?.toISOString?.()}
        </p>
      </Header>

      <p ref={pRef}>On hover</p>
      <Content setState={onStateChange} setCurrentDate={onDateChange} />
    </>
  );
}

export default App;
