import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const mainElement = document.getElementById("root");

const root = createRoot(mainElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
