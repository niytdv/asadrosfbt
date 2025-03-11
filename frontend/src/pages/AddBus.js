import React, { useState } from "react";
import axios from "axios";

function AddBus() {
  const [route, setRoute] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/buses", { route, time })
      .then((response) => {
        alert("Bus Added Successfully!");
        setRoute("");
        setTime("");
      })
      .catch((error) => console.error("Error adding bus:", error));
  };

  return (
    <div>
      <h2>Add New Bus</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter Bus Route"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          required
        />
        <input
          type="time"
          className="form-control mb-2"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success">Add Bus</button>
      </form>
    </div>
  );
}

export default AddBus;
