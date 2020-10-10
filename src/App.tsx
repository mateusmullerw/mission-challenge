import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

export default function App() {
  return (
    <Router>
      <h1>Mission Challenge</h1>
      <AppRoutes />
    </Router>
  );
}
