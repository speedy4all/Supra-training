import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./configureStore";
import { Provider } from "react-redux";
import { NavigationProvider } from "./context";

const mainElement = document.getElementById("root");

const root = createRoot(mainElement);

root.render(
  <Provider store={store}>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </Provider>
);
