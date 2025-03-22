import React from "react";
import Homeconcerts from "../Programme/homeindex";
import Homebillets from "../Billetterie/homeindex";
import Homeinfos from "../Infos/homeindex";
import Homemap from "../Carte/homeindex";
import Partenaires from "../Partenaires";



const Accueil = () => {
    return (
        <div className="space-y-8 flex flex-col items-center mx-auto py-4 my-4 font-sans" >
            <Homeconcerts />
            <Homebillets />
            <Homemap />
            <Homeinfos />
            <Partenaires />
        </div>
    );
}

export default Accueil;