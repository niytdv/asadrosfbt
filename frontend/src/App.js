import React, { useState, useEffect } from "react";
import "./App.css"; // Import the CSS file

const BusList = () => {
  const [buses, setBuses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/buses")
      .then((res) => res.json())
      .then((data) => setBuses(data))
      .catch((error) => console.error("Error fetching buses:", error));
  }, []);

  const filteredBuses = buses.filter((bus) =>
    bus.route.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="heading">🚍 Search Bus Routes</h2>
      <input
        type="text"
        placeholder="🔍 Search for a bus route..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchBox"
      />
      <div className="busList">
        {filteredBuses.length > 0 ? (
          filteredBuses.map((bus) => (
            <div key={bus._id || bus.id} className="busItem">
              <span className="route">{bus.route}</span>
              <span className="time">{bus.time}</span>
            </div>
          ))
        ) : (
          <p className="noResults">❌ No matching routes found.</p>
        )}
      </div>
    </div>
  );
};

export default BusList;
