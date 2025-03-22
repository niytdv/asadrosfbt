import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [search, setSearch] = useState("");
  const [buses, setBuses] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    axios.get("http://localhost:5000/buses")
      .then((res) => {
        setBuses(res.data);
      })
      .catch((err) => {
        console.error("Error fetching bus data:", err);
      });
  }, []);

  // Filter based on search query
  const filteredBuses = buses.filter((bus) =>
    bus.route.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="mb-3">Search Bus Routes</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Type to search (e.g. Pune, Mumbai...)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredBuses.length === 0 ? (
        <p>No buses found.</p>
      ) : (
        <ul className="list-group">
          {filteredBuses.map((bus) => (
            <li key={bus.id} className="list-group-item">
              <strong>{bus.route}</strong> — {bus.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
