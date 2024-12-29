import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App.jsx";
import { BrowserRouter } from "react-router-dom";
import "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/aadia1234.github.io" forceRefresh={true}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
