import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapIndex = () => {
    // Liste des marqueurs (coordonnées et descriptions)
    const locations = [
      { id: 1, name: "Scène 1", coords: [48.8652, 2.2532], description: "Scène Principale" },
      { id: 2, name: "Food Court", coords: [48.8650, 2.2534], description: "Espace restauration" },
      { id: 3, name: "WC", coords: [48.8644, 2.2534], description: "WC" }
    ];

    return (
        <div className="w-10/12 h-screen mx-auto">
          <MapContainer center={[48.8648, 2.2525]} zoom={17} scrollWheelZoom={true} className="w-full h-full">
            {/* Fond de carte OpenStreetMap */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            {/* Ajout des marqueurs */}
            {locations.map((location) => (
              <Marker key={location.id} position={location.coords}>
                <Popup>{location.name} - {location.description}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      );
    };
    
    export default MapIndex;