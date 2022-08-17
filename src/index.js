import { createRoot } from "react-dom/client";
import App from "./App";

import { NavigationProvider } from "./context";

const mainElement = document.getElementById("root");

const root = createRoot(mainElement);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
