import React from "react";

const Billets = () => {
    return (
        <div className='flex flex-col items-center p-8'>

        <h1 className=' text-darkPurple text-3xl font-bold py-6 mb-8'>Billetterie</h1>
        <div className='flex flex-col items-center bg-white border border-coral border-l-4 bg-opacity-90 md:w-8/12 shadow-lg p-4 rounded-3xl mb-8'>
            <h2 className='text-orange flex pb-4 font-extrabold text-2xl'>Billets</h2>
            <hr className="w-full border-coral"></hr>
            <p className="pt-4 font-bold">Billet 1 jour = 39€</p>
            <p className="font-bold">Billet 2 jours = 69€</p>
            <p className="mt-4">Tous nos billets sont disponibles sur la billeterie en ligne Live-Nation <br /> 
            Aucun billet ne sera mis en vente sur place le jour du festival.  </p>
        </div>

        <div className='flex flex-col items-center bg-white border border-coral border-l-4 bg-opacity-90 md:w-8/12 shadow-lg p-4 rounded-3xl mb-8'>
            <h2 className='text-orange flex pb-4 font-extrabold text-2xl'>Pass VIP</h2>
            <hr className="w-full border-coral"></hr>
            <p className="pt-4 font-bold">Pass VIP 1 jour = 99€</p>
            <p className="font-bold">Pass VIP 2 jours = 149€</p>
            <p className="mt-4">Les pass VIP vous donnent accès à des zones réservées, des boissons gratuites et des rencontres avec les artistes. <br />
            Les pass VIP sont disponibles en quantité limitée. </p>
            </div>

            <button className='bg-coral text-white text-2xl p-6 rounded-lg hover:bg-darkPurple hover:text-antiFlashWhite font-extrabold'>Acheter des billets</button>
        </div>
    );
}   

export default Billets;