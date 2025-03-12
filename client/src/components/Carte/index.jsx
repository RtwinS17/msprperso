import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import marker_restaurant from "../../assets/images/marker_restaurant.png";
import marker_wc from "../../assets/images/marker_wc.png";
import marker_scene from "../../assets/images/marker_scene.png";
import marker_gate from "../../assets/images/marker_gate.png";
import marker_hospital from "../../assets/images/marker_hospital.png"

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
        iconSize: [50, 50],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });
      const gateIcon = new L.Icon ({
        iconUrl: marker_gate,
        iconSize: [34, 34],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });
      const healthIcon = new L.icon ({
        iconUrl: marker_hospital,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })

      const getIcon = (type) => {
        switch (type) {
          case "scene":
            return sceneIcon;
          case "food":
            return foodIcon;
          case "wc":
            return wcIcon;
          case "entry":
              return gateIcon;
          case "health":
            return healthIcon;
          default:
            return sceneIcon; 
        }
      };

    // Liste des marqueurs (coordonnées et descriptions)
    const locations = [
      { id: 1, name: "Scène 1", coords: [48.8654 , 2.2533], description: "Scène Principale", type:"scene" },
      { id: 2, name: "Espace Restauration 1 ", coords: [48.86525, 2.2536], description: "L'espace food au plus proche de la scène 1", type:"food"},
      { id: 3, name: "WC 1", coords: [48.8650, 2.2536], description: "WC - scène 1", type:"wc" },
      { id: 4, name: "Scène 2", coords: [48.8646, 2.2537], description: "Scène Secondaire", type:"scene"},
      { id: 5, name: "Espace Restauration 2", coords: [48.86455, 2.2534], description : "L'espace food de la scène 2", type:"food"},
      { id: 6, name: "WC 2", coords: [48.86456, 2.2531], description: "WC - scène 2", type:"wc" },
      { id: 7, name: "Entrée", coords: [48.86545, 2.2541], description: "Entrée principale", type:"entry" },
      { id: 8, name: "Point Secours", coords: [48.8648, 2.2541], description: "Poste de secours", type:"health" }


    ];

    return (
      <div className='flex flex-col w-full  p-8'>

      <h1 className=' text-darkPurple flex p-6 font-extrabold text-3xl justify-center'>La Map du festival</h1>
        <div className="w-full md:w-8/12 h-screen mx-auto my-5">
          <MapContainer center={[48.8648, 2.2525]} zoom={17} scrollWheelZoom={true} className="w-full h-full">
            {/* Fond de carte OpenStreetMap */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            {/* Ajout des marqueurs */}
            {locations.map((location) => (
              <Marker key={location.id} position={location.coords} icon={getIcon(location.type)}>
                <Popup><p className="font-bold">{location.name} : </p> {location.description}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        </div>
      );
    };
    
    export default MapIndex;