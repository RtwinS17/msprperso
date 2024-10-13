import React from "react";
import { Link } from "react-router-dom";


const Homeindex = () => {

    return (
        <Link to="/" className="flex w-full font-sans font-bold  bg-antiFlashWhite ">
            
            <div className="p-2 flex w-full items-center justify-center ">
               <h1 className="font-bold text-lg">NOS PARTENAIRES : </h1>
            </div>

        </Link>   
            
        
    );
}   

export default Homeindex;