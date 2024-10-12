import React from "react";
import Homeconcerts from "../Programme/homeindex";
import Homebillets from "../Billetterie/homeindex";

const Accueil = () => {
    return (
        <div className="space-y-5 flex flex-col items-center mx-auto py-4 font-sans" >
            < Homeconcerts />
            <Homebillets />
        </div>
    );
}

export default Accueil;