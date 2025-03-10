import React from "react";
import { Link } from "react-router-dom";
import map_thumbnail from "../../assets/images/map_thumbnail.png";

const Homemap = () => {

    return (
      <Link to="/map" className="w-10/12 ">
      <div className="bg-cover shadow-lg shadow-darkPurple bg-center h-[350px] w-full flex items-center p-2 rounded-md text-antiFlashWhite bg-coral"
style={{ backgroundImage: `url(${map_thumbnail})` }}>
         <div className="flex flex-col justify-between  w-full h-full items-start"> 
          <h1 className=" bg-coral p-2 font-bold text-l">LA MAP</h1>
         <p className=" bg-coral p-2 font-bold text-l">Trouvez votre chemin sur le festival </p> 
         </div>  
      </div>
      </Link>

    

    )

      
    
};

export default Homemap;
