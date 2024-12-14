import React from "react";
import { Link } from "react-router-dom";
import home1 from "../../assets/images/home1.jpeg";

const Homeconcerts = () => {

    return (
        
            <Link to="/concerts" className="w-10/12 ">
            <div className="bg-cover shadow-lg shadow-darkPurple bg-center h-[350px] w-full flex items-center p-2 rounded-md text-antiFlashWhite"
     style={{ backgroundImage: `url(${home1})` }}>
               <div className="flex flex-col justify-between  w-full h-full items-start"> 
                <h1 className=" bg-coral p-2 font-bold text-l">LINE UP</h1>
               <p className=" bg-coral p-2 font-bold text-l">Découvrez les artistes </p> 
               </div>  
            </div>
            </Link>
        
    );
}

export default Homeconcerts;