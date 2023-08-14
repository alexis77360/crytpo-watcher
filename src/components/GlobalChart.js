import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Tooltip, Treemap } from 'recharts';
import color from "../styles/_settings.scss"

//? Trimap sous forme de graphique coinsData sont les données de l'api
const GlobalChart = ({coinsData}) => {

    const [dataArray, setDataArray] = useState([]);

    //? On définit les couleurs des rectangles en fonction de la variation de la crypto-monnaie
    const colorPicker = (number) => {
        if(number >= 20) {
            return color.color1;
        }
        else if(number >= 5){
            return color.green2;
        }
        else if(number >= 0){
            return color.green1;
        }
        else if(number >= -5){
            return color.red1;
        }
        else if(number >= -20){
            return color.red2;
        }
        else{
            return color.black2;
        }
    }

    //? On exclut les crypto-monnaies qui sont "stable"
    const excludeCoin = (coin) => {
        if (
            coin === "usdt" ||
            coin === "usdc" ||
            coin === "busd" ||
            coin === "dai" ||
            coin === "ust" ||
            coin === "mim" 
        )
        return false;
        else return true;
    }


    useEffect(() => {
        let chartData = [];

        //? On récupère les 45 premières crypto-monnaies et on les push dans chartData 
        if(coinsData.length > 0){
            for(let i =0; i < 45; i++)
            {
            if(excludeCoin(coinsData[i].symbol))
            {
                chartData.push({
                    name: coinsData[i].symbol.toUpperCase() + " " + coinsData[i].market_cap_change_percentage_24h.toFixed(1) + "%",
                    size : coinsData[i].market_cap,
                    fill : colorPicker(coinsData[i].price_change_percentage_24h),
                });        
            }
            }  
        }
        setDataArray(chartData);

    }, [coinsData]); //! Quand coinsData change, on refait le useEffect

    //? On crée un tooltip pour afficher le nom de la crypto-monnaie au survol
    const TreemapToolTip = ({active, payload, }) => {
        if(active && payload && payload.length){
            return (
                <div className='custom-tooltip'>
                    <p className='label'>{payload[0].payload.name}</p>
                </div>
            )
        }
        return null;
    }



    return (
        <div className='global-chart'>
            <Treemap
            width={730}
            height={181}
            data={dataArray}
            dataKey="size" //? taille des rectangles
            stroke='rgb(51,51,51'
            fill="black"
            aspectRatio="1" //? ratio des rectangles
            >
            <Tooltip content={<TreemapToolTip />} />
            </Treemap>
            
           
        </div>
    );
};

export default GlobalChart;