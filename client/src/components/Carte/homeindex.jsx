import React from "react";
import { Link } from "react-router-dom";
import map_thumbnail from "../../assets/images/map_thumbnail.png";

const Homemap = () => {

    return (
        <div className="relative w-10/12 h-64">
      {/* Image de la carte statique */}
      <img
        src= {map_thumbnail}
        alt="Carte du festival"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
      {/* Bouton/lien pour accéder à la carte interactive */}
      <Link
        to="/map"
        className="absolute inset-0 flex items-center justify-center bg-coral bg-opacity-50 text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity"
      >
        Voir la map du festival
      </Link>
    </div>

    )

      
    
};

export default Homemap;
