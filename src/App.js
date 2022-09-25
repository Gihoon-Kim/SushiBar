import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import Topbar from "./features/topbar/Topbar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
