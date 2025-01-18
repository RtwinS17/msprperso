import React from "react" ;
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-orange p-4 flex flex-col md:justify-evenly w-full">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0">
                
            {/* Section gauche : Adresse */}
            <div className="flex flex-col items-center mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-darkPurple">Contactez-nous :</h4>
            <p className=" text-darkPurple">nationsounds@epsi.fr</p>
            <p className=" text-darkPurple">+33 (0)3 20 21 22 23 24 </p>
            <p className="text-darkPurple">123 Rue du son, 75000 Paris , France</p>
            <Link to="/contact" className="text-darkPurple">Nous contacter</Link>
          </div>

            
            {/* Section droite : Menu hamburger pour petits écrans */}
            
            <div className="flex flex-col items-center space-y-2 md:space-x-3 md:space-y-0">
                <h2 className="text-lg font-semibold mb-2 text-darkPurple">Suivez-nous</h2>
                
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-3 md:space-y-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="h-4 w-4 text-darkPurple" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="h-4 w-4 text-darkPurple" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-4 w-4 text-darkPurple" />
                </a></div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;

