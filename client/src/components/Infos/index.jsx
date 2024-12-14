import React, { useState, useEffect } from "react";

const Infos = () => {
  const [alertes, setAlertes] = useState([]);
  const categoryId = "5"; // Remplace par l'ID de la catégorie "alertes"

  useEffect(() => {
    // Récupération des alertes depuis l'API WordPress
    fetch(`http://localhost/mspr_remi/wordpress/wp-json/wp/v2/posts?categories=${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        setAlertes(data);
      })
      .catch((error) => console.error("Erreur lors de la récupération des alertes:", error));
  }, [categoryId]);

  return (
    <div className="flex flex-col items-center bg-lightGrey py-6">
      <h2 className="text-2xl font-bold mb-4">Dernières infos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl px-4">
        {alertes.map((alerte) => (
          <div
            key={alerte.id}
            className="bg-coral shadow-lg p-6 rounded-3xl border-l-4 border-orange-500"
          >
            <h3 className="md:text-xl font-semibold text-orange-600">{alerte.acf.titre}</h3>
            <p className="text-white mt-2 text-sm md:text-base">{alerte.acf.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infos;
