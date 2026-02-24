import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/api";
import Header from "../components/Header";
import "leaflet/dist/leaflet.css";
import { Typography, Paper } from "@mui/material";

const cityCoords = {
  London: [51.5074, -0.1278],
  Tokyo: [35.6762, 139.6503],
  "New York": [40.7128, -74.006],
  "San Francisco": [37.7749, -122.4194],
  Singapore: [1.3521, 103.8198],
  Edinburgh: [55.9533, -3.1883],
  Sidney: [-33.8688, 151.2093],
};

const CityMap = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetchEmployees().then((employees) => {
      const count = {};
      employees.forEach((e) => {
        count[e.city] = (count[e.city] || 0) + 1;
      });
      setData(count);
    });
  }, []);

  return (
    <>
      <Header />

      <div className="p-6 min-h-screen bg-[#0f172a]">
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Global Presence
        </Typography>

        <Paper
          sx={{
            height: "75vh",
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid #1e293b",
          }}
        >
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {Object.keys(data).map(
              (city) =>
                cityCoords[city] && (
                  <Marker key={city} position={cityCoords[city]}>
                    <Popup>
                      <b>{city}</b>
                      <br />
                      Employees: {data[city]}
                    </Popup>
                  </Marker>
                )
            )}
          </MapContainer>
        </Paper>
      </div>
    </>
  );
};

export default CityMap;