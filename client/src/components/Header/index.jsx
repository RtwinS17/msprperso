import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo2 from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
             <header className="bg-orange text-white flex justify-around  items-center">
        {/* Section gauche : Icônes des réseaux sociaux */}
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

        {/* Section centrale : Logo */}
        <Link to="/"> 
        <div className="flex flex-col">
            <img src={logo2} alt="logo" className="w-32 h-32"/>
        </div>
</Link>
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
        <ul className="flex justify-around items-center p-4">
          <li><Link className="hover:text-azure" to="/">Accueil</Link></li>
          <li><Link className="hover:text-azure" to="/concerts">Programme</Link></li>
          <li><Link className="hover:text-azure" to="/billets">Billeterie</Link></li>
          <li><Link className="hover:text-azure" to="/map">Carte</Link></li>
          <li><Link className="hover:text-azure" to="/infos">Informations</Link></li>
        </ul>
      </nav>
        </>
        
        
    );
}

export default Header;