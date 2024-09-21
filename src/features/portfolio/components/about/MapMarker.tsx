"use client";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

type MapMarkerProps = {
  position: [number, number];
  popupText?: string;
  className?: string;
  children?: React.ReactNode; // Allow custom content for the marker
};

// MapMarker React component using L.divIcon for styling
const MapMarker: React.FC<MapMarkerProps> = ({
  position,
  popupText = "Custom Marker Popup",
  className = "custom-marker",
  children,
}) => {
  // Create a divIcon with custom styles
  const icon = L.divIcon({
    className, // Use the provided className or default one
    html: children ? children.toString() : "", // Allow custom children as marker content
    iconSize: [100, 100], // Size of the marker
    iconAnchor: [40, 60], // Adjust anchor to position the marker correctly
  });

  return (
    <Marker position={position} icon={icon}>
      <Popup>{popupText}</Popup>
    </Marker>
  );
};

export default MapMarker;
