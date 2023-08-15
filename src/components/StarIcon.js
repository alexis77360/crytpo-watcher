import React from 'react';
import { useState, useEffect } from 'react';

const StarIcon = ({coinId}) => {

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        if (window.localStorage.coinList) {
            let favList = window.localStorage.coinList.split(",");
            if(favList.includes(coinId)) {
                setIsFavorite(true);
            }

        }
    })

    //? Gère l'ajout et la suppression des favoris
    const idChecker = (id) => {
        let favList = null;

        if (window.localStorage.coinList) {
            favList = window.localStorage.coinList.split(",");
        }

            if(favList){
                //! Si l'id est déjà dans la liste, on le retire
                if(favList.includes(id)) {   
                    window.localStorage.coinList = favList.filter((coin) => coin !== id); 
                    setIsFavorite(false);
                
                    //? on ajoute l'l'id à la liste
                }else {
                    window.localStorage.coinList = [...favList, coinId]
                    setIsFavorite(true);
                }
            }
                else {
                window.localStorage.coinList = coinId;
                setIsFavorite(true);
            }
        }
    return (
        <img
        onClick={() => idChecker(coinId)}
        src= {isFavorite ? "./assets/star-full.svg" : "./assets/star-empty.svg"} alt="star" />
    );
};

export default StarIcon;