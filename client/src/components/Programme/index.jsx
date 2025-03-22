import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Concerts = () => {
  const [concerts, setConcerts] = useState([]);
  const [filteredConcerts, setFilteredConcerts] = useState([]);
  const [images, setImages] = useState({});
  const categoryId = '3'; 

  useEffect(() => {
    fetch(`http://localhost/mspr_remi/wordpress/wp-json/wp/v2/posts?categories=${categoryId}&per_page=30`)
      .then(response => response.json())
      .then(data => {
        
      // Tri des concerts
        const sortedConcerts = data.sort((a, b) => {
          const dateA = dayjs(a.acf.date + " " + a.acf.heure, "YYYYMMDD HH:mm:ss");
          const dateB = dayjs(b.acf.date + " " + b.acf.heure, "YYYYMMDD HH:mm:ss");
          return dateA - dateB; 
        });

        setConcerts(sortedConcerts);
        setFilteredConcerts(sortedConcerts); 

        // Récupération des images
        sortedConcerts.forEach(concert => {
          const imageId = concert.acf.image;
          if (imageId) {
            fetch(`http://localhost/mspr_remi/wordpress/wp-json/wp/v2/media/${imageId}`)
              .then(response => response.json())
              .then(imageData => {
                setImages(prevImages => ({
                  ...prevImages,
                  [concert.id]: imageData.source_url
                }));
              })
              .catch(error => console.error('Erreur lors de la récupération de l\'image:', error));
          }
        });
      })
      .catch(error => console.error('Erreur lors de la récupération des concerts:', error));
  }, [categoryId]);

  const formatTime = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':');
    const date = new Date();
    date.setHours(hours, minutes, seconds);
    return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  };

  const [activeFilter, setActiveFilter] = useState("all");
  
  // Fonctions de filtrage
  const showAllArtists = () => {
    setFilteredConcerts(concerts);
    setActiveFilter("all");
  };

  const filterByDate5Sep2025 = () => {
    setFilteredConcerts(concerts.filter(concert => concert.acf.date === '20250905'));
    setActiveFilter("5Sep");
  };

  const filterByDate6Sep2025 = () => {
    setFilteredConcerts(concerts.filter(concert => concert.acf.date === '20250906'));
    setActiveFilter("6Sep");
  };

  return (
    <div className="flex flex-col w-full p-8">
      <h1 className="text-darkPurple flex p-6 font-extrabold text-3xl justify-center">Concerts</h1>

      {/* Boutons de filtre */}
      <div className="flex space-x-4 mb-4 justify-center w-10/12 mx-auto">
        <button 
          onClick={showAllArtists} 
          className={`px-4 py-2 rounded shadow-md font-semibold text-sm md:text-base ${
            activeFilter === "all" ? "bg-darkPurple text-white" : "bg-coral hover:bg-darkPurple text-white"
          }`}
        >
          Tous les artistes
        </button>

        <button 
          onClick={filterByDate5Sep2025} 
          className={`px-4 py-2 rounded shadow-md font-semibold text-sm md:text-base ${
            activeFilter === "5Sep" ? "bg-darkPurple text-white" : "bg-coral hover:bg-darkPurple text-white"
          }`}
        >
          Concerts du vendredi
        </button>

        <button 
          onClick={filterByDate6Sep2025} 
          className={`px-4 py-2 rounded shadow-md font-semibold text-sm md:text-base ${
            activeFilter === "6Sep" ? "bg-darkPurple text-white" : "bg-coral hover:bg-darkPurple text-white"
          }`}
        >
          Concerts du samedi
        </button>
      </div>

      {/* Liste des concerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-10/12 mx-auto">
        {filteredConcerts.map(concert => (
          <div key={concert.id} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="md:w-1/3 w-full flex items-center justify-center">
              {images[concert.id] && (
                <img 
                  src={images[concert.id]} 
                  alt={concert.title.rendered} 
                  className="w-full h-40 md:h-48 object-cover rounded-lg"
                />
              )}
            </div>

            {/* Contenu du concert */}
            <div className="flex flex-col justify-center p-4 w-full md:w-2/3">
              <h2 className="text-xl font-semibold text-center md:text-left">{concert.acf.artistes}</h2>
              <p className="text-gray-700 flex items-center"><span className="mr-2">🎤</span> {concert.acf.scene}</p>
              <p className="text-gray-700 flex items-center"><span className="mr-2">📅</span> {dayjs(concert.acf.date).format('DD/MM/YYYY')}</p>
              <p className="text-gray-700 flex items-center"><span className="mr-2">⏰</span> {formatTime(concert.acf.heure)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concerts;
