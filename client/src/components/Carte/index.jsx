import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marker_restaurant from "../../assets/images/marker_restaurant.png";
import marker_wc from "../../assets/images/marker_wc.png";
import marker_scene from "../../assets/images/marker_scene.png";

const MapIndex = () => {

    const foodIcon = new L.Icon({
        iconUrl: marker_restaurant,
        iconSize: [32, 32], 
        iconAnchor: [16, 32], 
        popupAnchor: [0, -32], 
      });
      const wcIcon = new L.Icon ({
        iconUrl: marker_wc,
        iconSize: [32, 32], 
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });
      const sceneIcon = new L.Icon ({
        iconUrl: marker_scene,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      const getIcon = (type) => {
        switch (type) {
          case "scene":
            return sceneIcon;
          case "food":
            return foodIcon;
          case "wc":
            return wcIcon;
          default:
            return sceneIcon; // Icône par défaut si aucun type ne correspond
        }
      };

    // Liste des marqueurs (coordonnées et descriptions)
    const locations = [
      { id: 1, name: "Scène 1", coords: [48.8652, 2.2532], description: "Scène Principale", type:"scene" },
      { id: 2, name: "Espace Restauration 1 ", coords: [48.8650, 2.2534], description: "L'espace food au plus proche de la scène 1", type:"food"},
      { id: 3, name: "WC 1", coords: [48.8644, 2.2534], description: "WC - scène 1", type:"wc" }
    ];

    return (
        <div className="w-10/12 h-screen mx-auto">
          <MapContainer center={[48.8648, 2.2525]} zoom={17} scrollWheelZoom={true} className="w-full h-full">
            {/* Fond de carte OpenStreetMap */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            {/* Ajout des marqueurs */}
            {locations.map((location) => (
              <Marker key={location.id} position={location.coords} icon={getIcon(location.type)}>
                <Popup>{location.name} : {location.description}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      );
    };
    
    export default MapIndex;