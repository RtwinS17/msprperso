import React from "react";
import { Link } from "react-router-dom";
import home4 from "../../assets/images/home4.jpg";

const Homeinfos = () => {
    
        return (
            <Link to="/infos" className="w-10/12">
                <div className="bg-cover shadow-lg shadow-darkPurple bg-center h-[350px] w-full flex items-center p-2 rounded-md text-antiFlashWhite"
                    style={{ backgroundImage: `url(${home4})` }}>
                    <div className="flex flex-col justify-between  w-full h-full items-start">
                        <h1 className=" bg-coral p-2 font-bold text-l">INFOS</h1>
                        <p className=" bg-coral p-2 font-bold text-l">Toutes les informations</p>
                    </div>
                </div>
            </Link>
        );
    }   

export default Homeinfos;
