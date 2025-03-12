import React, { useState, useEffect } from "react";
import FAQ from "../Faq";
import ContactForm from "../Contact";

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
    <div className="flex flex-col items-center p-8">
      
        <h2 className="text-darkPurple text-3xl font-bold py-6 mb-8">Dernières infos</h2>   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 gap-6 lg:gap-20">
        {alertes.map((alerte) => (
          <div
            key={alerte.id}
            className="bg-white border border-coral border-l-4 shadow-lg p-4 lg:p-6 rounded-3xl mb-8"
          >
            <h3 className=" text-orange md:text-xl text-center font-semibold">{alerte.acf.titre}</h3>
            <p className=" mt-2 text-sm md:text-base">{alerte.acf.description}</p>
          </div>
        ))}
      </div>
      <hr  className="w-10/12 my-8"/>
      <FAQ />
      <hr  className="w-10/12 my-8"/>
      <h1 className="text-3xl font-bold mb-2 text-center">
        Contactez-nous
      </h1>
      <ContactForm />
      </div>
     
    
  );
};

export default Infos;
