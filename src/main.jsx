import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ActividadContextProvider } from "./context/ActividadContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActividadContextProvider>
      <App />
    </ActividadContextProvider>
  </React.StrictMode>
);
