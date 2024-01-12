import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <App />
    </div>
  </React.StrictMode>
);
