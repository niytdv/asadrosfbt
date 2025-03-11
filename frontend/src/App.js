import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddBus from "./pages/AddBus";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-light bg-light">
          <Link to="/" className="navbar-brand">Bus Scheduler</Link>
          <Link to="/add-bus" className="btn btn-primary">Add Bus</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-bus" element={<AddBus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
