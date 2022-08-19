import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./configureStore";
import { Provider } from "react-redux";

const mainElement = document.getElementById("root");

const root = createRoot(mainElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
