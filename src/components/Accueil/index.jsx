import React from "react";
import { Link } from "react-router-dom";

const Accueil = () => {
    return (
        <div className="flex flex-col items-center p-8">
            <h1 className=' flex p-6 font-extrabold text-3xl justify-center'>Accueil</h1>
            <p>Bienvenue sur la page d'accueil de notre site !</p>
            <Link to="/concerts">Voir le programme</Link>
        </div>
    );
}

export default Accueil;