import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5"; 
import logo2 from "../../assets/images/logo2.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header className="bg-orange text-white w-full">
        
       <div className="flex flex-row justify-between items-center mx-auto w-10/12"> 
       {/* Icônes réseaux sociaux */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-3 md:space-y-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>

        {/* Logo */}
        <Link to="/">
          <img src={logo2} alt="logo" className="w-32 h-32 md:w-48 md:h-48" />
        </Link>

        {/* Icône du menu hamburger */}
        <button onClick={toggleMenu} className="md:invisible focus:outline-none">
          <IoMenu className="h-8 w-8 text-white" />
        </button>
        </div>
      </header>

      {/* NAVIGATION POUR GRAND ÉCRAN */}
      <nav className="bg-white shadow-md hidden md:block">
        <ul className="w-10/12 flex justify-between items-center mx-auto py-4">
          <li><Link className="hover:text-gray-600" to="/">Accueil</Link></li>
          <li><Link className="hover:text-gray-600" to="/concerts">Programme</Link></li>
          <li><Link className="hover:text-gray-600" to="/billets">Billetterie</Link></li>
          <li><Link className="hover:text-gray-600" to="/map">Carte</Link></li>
          <li><Link className="hover:text-gray-600" to="/infos">Informations</Link></li>
        </ul>
      </nav>

      {/* OVERLAY POUR L'ARRIÈRE-PLAN FLOU LORSQUE LE MENU MOBILE EST OUVERT */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40" 
          onClick={toggleMenu}
        ></div>
      )}

      {/* MENU MOBILE */}
      <div className={` bg-orange fixed top-0 right-0 h-full w-2/3 rounded-l-3xl shadow-lg z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        {/* Bouton de fermeture */}
        <button onClick={toggleMenu} className="absolute top-4 right-4">
          <IoClose className="h-8 w-8 text-darkPurple hover:text-gray-600" />
        </button>

        {/* Liens du menu */}
        <nav className="py-20 h-full ">
          <ul className="h-full text-end text-darkPurple font-bold flex flex-col justify-around text-xl px-8  ">
            <li><Link to="/" onClick={toggleMenu} className="hover:text-gray-600">Accueil</Link></li>
            <li><Link to="/concerts" onClick={toggleMenu} className="hover:text-gray-600">Programme</Link></li>
            <li><Link to="/billets" onClick={toggleMenu} className="hover:text-gray-600">Billetterie</Link></li>
            <li><Link to="/map" onClick={toggleMenu} className="hover:text-gray-600">Carte</Link></li>
            <li><Link to="/infos" onClick={toggleMenu} className="hover:text-gray-600">Informations</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
