import React from "react";
import Homeconcerts from "../Programme/homeindex";
import Homebillets from "../Billetterie/homeindex";
import Homeinfos from "../Infos/homeindex";

const Accueil = () => {
    return (
        <div className="space-y-5 flex flex-col items-center mx-auto py-4 font-sans" >
            < Homeconcerts />
            <Homebillets />
            <Homeinfos />
        </div>
    );
}

export default Accueil;