import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="navbar__spacer">
        <AppRoutes />
      </div>
    </Router>
  );
}
