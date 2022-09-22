import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { TransactionProvider } from "./context/TransactionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionProvider value={{ value: "test" }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>
);
