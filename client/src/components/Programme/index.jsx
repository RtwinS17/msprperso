import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const Concerts = () => {
  const [concerts, setConcerts] = useState([]);
  const [filteredConcerts, setFilteredConcerts] = useState([]);
  const [images, setImages] = useState({});
  const categoryId = '3'; // Remplace par l'ID correct

  useEffect(() => {
    fetch(`http://localhost/mspr_remi/wordpress/wp-json/wp/v2/posts?categories=${categoryId}`)
      .then(response => response.json())
      .then(data => {
        setConcerts(data);
        setFilteredConcerts(data); // Par défaut, afficher tous les concerts

        // Pour chaque concert, on récupère l'ID de l'image et on fait une requête pour récupérer son URL
        data.forEach(concert => {
          const imageId = concert.acf.image;
          if (imageId) {
            fetch(`http://localhost/mspr_remi/wordpress/wp-json/wp/v2/media/${imageId}`)
              .then(response => response.json())
              .then(imageData => {
                setImages(prevImages => ({
                  ...prevImages,
                  [concert.id]: imageData.source_url // Association de l'URL de l'image à l'ID du concert
                }));
              })
              .catch(error => console.error('Erreur lors de la récupération de l\'image:', error));
          }
        });
      })
      .catch(error => console.error('Erreur lors de la récupération des concerts:', error));
  }, [categoryId]);

 

  // Fonction pour formater l'heure
  const formatTime = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':');
    const date = new Date();
    date.setHours(hours, minutes, seconds);
    return date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  };

  // Fonction pour afficher tous les artistes
  const showAllArtists = () => {
    setFilteredConcerts(concerts);
  };

  // Fonction pour filtrer les concerts du 5 septembre 2025
  const filterByDate5Sep2025 = () => {
    const filtered = concerts.filter(concert => concert.acf.date === '20250905');
    setFilteredConcerts(filtered);
  };

  // Fonction pour filtrer les concerts du 6 septembre 2025
  const filterByDate6Sep2025 = () => {
    const filtered = concerts.filter(concert => concert.acf.date === '20250906');
    setFilteredConcerts(filtered);
  };

  return (
    
        
            
        <div className='flex flex-col w-full  p-8'>

      <h1 className=' flex p-6 font-extrabold text-3xl justify-center'>Concerts</h1>

      {/* Boutons de filtre */}
      <div className="flex  space-x-4 mb-4 justify-center ">
        <button onClick={showAllArtists} className="bg-coral hover:bg-darkPurple active:bg-darkPurple text-white px-4 py-2 rounded shadow-md font-semibold text-sm md:text-base">Tous les artistes</button>
        <button onClick={filterByDate5Sep2025} className="bg-coral hover:bg-darkPurple active:bg-darkPurple text-white px-4 py-2 rounded font-semibold text-sm md:text-base">Concerts du samedi</button>
        <button onClick={filterByDate6Sep2025} className="bg-coral hover:bg-darkPurple active:bg-darkPurple text-white px-4 py-2 rounded font-semibold text-sm md:text-base">Concerts du dimanche</button>
      </div>

      <ul>
        {filteredConcerts.map(concert => (
          <li key={concert.id} className='flex flex-col m-6'>
          
            <div className='flex items-center space-x-4'>
              <div className='w-52'>
                {/* Afficher l'image si elle existe */}
                {images [concert.id] && <img src={images[concert.id]} alt={concert.title.rendered} />}
              </div>
            
            {/* Informations du concert */}
            <div className='w-full md:w-3/4 flex flex-col items-start justify-start'>
              <h2 className='text-xl font-semibold'>{concert.title.rendered}</h2>
              <p className='text-gray-700'>Scène: {concert.acf.scene}</p>
              <p>{dayjs(concert.acf.date).format('DD/MM/YYYY')}</p>
              <p className='text-gray-700'>{formatTime(concert.acf.heure)}</p>
            </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
  );
};

export default Concerts;
