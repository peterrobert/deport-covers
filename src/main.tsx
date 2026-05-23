import { createRoot } from "react-dom/client";
// @ts-ignore: Allow CSS side-effect import in this project setup
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
