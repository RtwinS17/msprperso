import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo1 from "../../assets/images/logo1.png";

const Header = () => {
    return (
        <>
             <header className="bg-darkPurple text-white p-4 flex justify-between items-center">
        {/* Section gauche : Icônes des réseaux sociaux */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-3 md:space-y-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-4 w-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-4 w-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-4 w-4" />
          </a>
        </div>

        {/* Section centrale : Logo */}
        <div className="flex flex-col items-center justify-center">
            <img src={logo1} alt="logo" className="w-16 h-16 mx-auto"/>
        </div>

        {/* Section droite : Menu hamburger pour petits écrans */}
        <div className="md:invisible">
            <button className="text-white focus:outline-none">
                <svg xmlnx="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
            </header>
           
            {/* Navigation en dessous du header pour les écrans larges */}
      <nav className="bg-white shadow-md hidden md:block">
        <ul className="flex justify-between px-10 p-4">
          <li><a href="#home" className="hover:text-azure">Accueil</a></li>
          <li><a href="#programme" className="hover:text-azure">Programme</a></li>
          <li><a href="#billetterie" className="hover:text-azure">Billetterie</a></li>
          <li><a href="#carte" className="hover:text-azure">Carte</a></li>
          <li><a href="#faq" className="hover:text-azure">FAQ</a></li>
        </ul>
      </nav>
        </>
        
        
    );
}

export default Header;