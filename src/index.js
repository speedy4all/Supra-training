import { createRoot } from "react-dom/client";
import App from "./App";

const mainElement = document.getElementById('root');

const root = createRoot(mainElement);

root.render(<App />);