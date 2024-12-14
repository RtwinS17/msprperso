import React from "react";
import { Link } from "react-router-dom";
import {  FaArrowRight } from "react-icons/fa";

const Homebillets = () => {

    return (
        <Link to="/billets" className="flex w-10/12 font-sans font-bold rounded-md p-2 border-2 border-coral ">
            
            <div className="flex w-full items-center justify-between">
               <span className="text-lg "> Achetez 
                    <br />
                    votre
                   <a className="text-coral text-xl"> billet</a> </span>
                <div><FaArrowRight className="h-12 w-12 text-coral" /></div>
            </div>

        </Link>   
            
        
    );
}   

export default Homebillets;