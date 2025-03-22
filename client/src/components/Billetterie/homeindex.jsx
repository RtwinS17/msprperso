import React from "react";
import { Link } from "react-router-dom";
import {  FaArrowRight } from "react-icons/fa";

const Homebillets = () => {

    return (
        <Link to="/billets" className="flex w-10/12 font-sans font-bold rounded-md p-4 border-2 border-coral hover:scale-105 transition transform duration-300">
      <div className="flex w-full items-center justify-between">
        <span className="text-lg">Achetez <br /> votre <span className="text-coral text-xl">billet</span></span>
        <div>
          <FaArrowRight className="h-12 w-12 text-coral" />
        </div>
      </div>
    </Link>
            
        
    );
}   

export default Homebillets;