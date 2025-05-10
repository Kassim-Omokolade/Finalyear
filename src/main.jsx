import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppProvider from "./context.jsx";
import AdminProvider from "./adminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
    </AppProvider>
  </React.StrictMode>
);
