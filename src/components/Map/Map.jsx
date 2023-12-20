import "./Map.css";

import React, { useState } from "react";
import locationJson from "../../location.json";

const Map = () => {
  const locations = locationJson;

  const [location, setLocation] = useState(locations[0]);

  function changeLocation(newLocation) {
    setLocation(newLocation);
  }

  return (
    <div className="content">
      <h1>Localização</h1>
      <section className="container">
        <iframe
          src={location.path}
          style={{ border: "0;" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map1"
        >
        </iframe>
      </section>
    </div>
  );
};

export default Map;
