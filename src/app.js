import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ReactList from "./ReactList";
import ReactSimpleCounter from "./ReactSimpleCounter";
import Navbar from "./Navbar";
import ReactButtonToggle from "./ReactButtonToggle";

function app() {
  return (
    <Router>
      <div>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/counter" element={<ReactSimpleCounter />} />
          <Route path="/list" element={<ReactList />} />
          <Route path="/toggle" element={<ReactButtonToggle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default app;
