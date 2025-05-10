import axios from "axios";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const DynamicMap = ({ location }) => {
  const [l, setL] = useState({});
  const [loading, setIsLoading] = useState(true);
  const getGeoLocation = async () => {
    try {
      const { data } = await axios(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          location
        )}&format=json`
      );

      if (data && data.length > 0) {
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        // Now you can use these latitude and longitude values
        setL({ latitude, longitude });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error geocoding location:", error);
    }
  };
  useEffect(() => {
    getGeoLocation();
  }, [location]);

  return (
    <div >
      {loading ? (
        <h1>loading..</h1>
      ) : (
        <MapContainer
          center={[l.latitude, l.longitude]}
          zoom={15}
          style={{ height: "417px", borderRadius: "15px", width: "500px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
          />
          <Marker position={[l.latitude, l.longitude]}></Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default DynamicMap;
