import React, { useState, useEffect } from "react";

const BusList = () => {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/buses")  // Ensure this matches your backend
      .then((res) => res.json())
      .then((data) => setBuses(data)) // Update the state with the fetched buses
      .catch((error) => console.error("Error fetching buses:", error));
  }, []);  // Empty dependency array ensures it runs once when the component loads

  return (
    <div>
      <h2>Search Bus Routes</h2>
      <input type="text" placeholder="Search for a bus route..." />
      {buses.map((bus) => (
        <div key={bus.id}>
          {bus.route} - {bus.time}
        </div>
      ))}
    </div>
  );
};

export default BusList;
