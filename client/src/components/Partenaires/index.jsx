import React, { useState, useEffect } from "react";

const Partenaires = () => {
  const [partenaires, setPartenaires] = useState([]);
  const categoryId = '4'; // Remplace par l'ID de la catégorie "partenaires"

  useEffect(() => {
    // Récupération des partenaires depuis l'API WordPress
    fetch(`http://localhost/mspr_remi/wordpress/wp-json/wp/v2/posts?categories=${categoryId}`)
      .then((response) => response.json())
      .then(async (data) => {
        // Ajouter les logos pour chaque partenaire
        const partenairesAvecLogos = await Promise.all(
          data.map(async (partenaire) => {
            const imageId = partenaire.acf.logo;
            if (imageId) {
              try {
                const imageResponse = await fetch(
                  `http://localhost/mspr_remi/wordpress/wp-json/wp/v2/media/${imageId}`
                );
                const imageData = await imageResponse.json();
                return { ...partenaire, logoUrl: imageData.source_url };
              } catch (error) {
                console.error("Erreur lors de la récupération de l'image:", error);
                return { ...partenaire, logoUrl: null }; // En cas d'erreur
              }
            } else {
              return { ...partenaire, logoUrl: null }; // Si aucun logo
            }
          })
        );
        setPartenaires(partenairesAvecLogos);
      })
      .catch((error) => console.error("Erreur lors de la récupération des partenaires:", error));
  }, [categoryId]);

  return (
    <div className="flex flex-col items-center bg-antiFlashWhite p-4 w-full">
      <h2 className="text-2xl font-bold mb-4 md:text-lg">Nos partenaires :</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {partenaires.map((partenaire) => (
          <div key={partenaire.id} className="flex-none">
            {partenaire.logoUrl ? (
              <a href={partenaire.acf.lien} target="_blank" rel="noopener noreferrer">              
              <img
                src={partenaire.logoUrl}
                alt={partenaire.title.rendered}
                className="h-16 w-auto object-contain mx-2"
              />
              </a>
            ) : (
              <p className="text-gray-500 italic">Logo indisponible</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partenaires;
