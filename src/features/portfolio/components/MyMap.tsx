"use client";

import Card from "./Card";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// Import the necessary Leaflet CSS
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { Skeleton } from "@chakra-ui/react";

// Create a custom icon (optional)
const customIcon = new L.Icon({
  iconUrl: "/alien-head.svg",
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  //shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
  //shadowSize: [50, 64],
  //shadowAnchor: [4, 62],
});

const MyMap = () => {
  const position = [35.7156, 51.3419]; // Tehran, Iran
  const [loading, setLoading] = useState(true);

  return (
    <Card className=" h-[320px] grid place-content-center p-0 z-0 #after:outline-red-600 overflow-clip md:col-span-2 lg:col-span-1">
      <div className="absolute #top-1/2 #-translate-y-1/2 -top-1 -bottom-1 #left-1/2 #-translate-x-1/2 -left-1 -right-1 rounded-md overflow-hidden -z-10 ">
        <Skeleton isLoaded={!loading}>
          <MapContainer
            // @ts-ignore

            center={position}
            zoom={15}
            style={{
              width: "100%",
              height: "100%",
            }}
            whenReady={() => setLoading(false)}
          >
            {/* Map tiles */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Marker */}
            {/* @ts-ignore */}
            <Marker position={position} icon={customIcon}>
              <Popup>I live here.</Popup>
            </Marker>
          </MapContainer>
        </Skeleton>
      </div>
    </Card>
  );
};

export default MyMap;
