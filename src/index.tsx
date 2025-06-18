import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Desktop from "./Desktop";
import ThankYou from "./ThankYou";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Desktop />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
