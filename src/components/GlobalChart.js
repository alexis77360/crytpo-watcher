import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Treemap } from 'recharts';

//? Trimap sous forme de graphique coinsData sont les données de l'api
const GlobalChart = ({coinsData}) => {

    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        let chartData = [];

        //? On récupère les 45 premières crypto-monnaies et on les push dans chartData 
        if(coinsData.length > 0){
            for(let i =0; i < 45; i++)
            {
                chartData.push({
                    name: coinsData[i].symbol.toUpperCase() + " " + coinsData[i].market_cap_change_percentage_24h.toFixed(1) + "%",
                    size : coinsData[i].market_cap,
                    fill : null,
                });

            }
            
        }
        setDataArray(chartData);

    }, [coinsData]); //! Quand coinsData change, on refait le useEffect

    const TreemapToolTip = ({active, payload, }) => {
        if(active && payload && payload.length){
            return (
                <div className='custom-tooltip'>
                    <p className='label'>{payload[0].payload.name}</p>
                </div>
            )
        }
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
            aspectRatio= "1" //? ratio des rectangles
            
            />
           
        </div>
    );
};

export default GlobalChart;