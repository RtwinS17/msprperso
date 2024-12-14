import React from "react";
import { Link } from "react-router-dom";


const HomePartenaires = () => {

    return (
        <Link to="/" className="flex w-full font-sans font-bold text-lg text-center ">
            
            <div className="p-2 flex w-full items-center justify-center ">
               <h1 className="font-bold text-lg">NOS PARTENAIRES : </h1>
            </div>

        </Link>   
            
        
    );
}   

export default HomePartenaires;