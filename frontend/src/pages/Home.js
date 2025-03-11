import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [search, setSearch] = useState("");
  const [buses, setBuses] = useState([]);

  // Fetch buses from backend
  useEffect(() => {
    axios.get("http://localhost:5000/buses")
      .then((response) => setBuses(response.data))
      .catch((error) => console.error("Error fetching buses:", error));
  }, []);

  const filteredBuses = buses.filter(bus =>
    bus.route.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Bus Routes</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Search for a bus route..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list-group mt-3">
        {filteredBuses.map(bus => (
          <li key={bus.id} className="list-group-item">
            {bus.route} - {bus.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
