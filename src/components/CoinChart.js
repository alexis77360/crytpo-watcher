import React, { useEffect } from 'react';
import axios from 'axios';
import { AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, Area} from 'recharts';
import colors from '../styles/_settings.scss';

const CoinChart = ({coinId, coinName}) => {
    const [duration, setDuration] = React.useState(30);
    const [coinData, setCoinData] = React.useState();


    const headerData = [
        [1, "1 jours"],
        [3, "3 jours"],
        [7, "7 jours"],
        [30, "30 jours"],
        [91, "90 jours"],
        [181, "180 jours"],
        [365, "365 jours"],
        [3000, "Max"],
    ];

    useEffect(() => {

        let dataArray = [];

        //? Récupère les données du graphique de la crypto
        axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${duration}${duration > 32 ? "&interval=daily" : ""}`)
        .then(res => {

            for(let i = 0; i < res.data.prices.length; i++) {
                let price = res.data.prices[i][1];

                dataArray.push({
                    date : new Date(res.data.prices[i][0]).toLocaleDateString(),
                    price : price < "50" ? price : parseInt(price)
                })
            }
            setCoinData(dataArray);
        })
    }, [duration, coinId])
        
    return (
        <div className='coin-chart'>
            <p>{coinName}</p>
            <div className="btn-container">
                {headerData.map((el, index) => {
                    return (
                        <div htmlFor={"btn" + el[0]} 
                        key={index}
                        onClick={() => setDuration(el[0])}
                        className={duration === el[0] ? "active-btn" : ""}
                        >
                            {el[1]}
                        </div>
                       
                    );
                })}
            </div>
            {/*//! Graphique avec AreaChart */}
            <AreaChart width={680} height={250} data={coinData} margin={{top: 10, right: 0, left: 100, bottom: 0}}>


                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={colors.color1} stopOpacity={0.8}/>
                    <stop offset="95%" stopColor={colors.color1} stopOpacity={0}/>
                    </linearGradient>
                </defs>


                <XAxis dataKey="date" />
                <YAxis domain ={["auto", "auto"]} 
                dataKey="price" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" 
                dataKey="price" 
                stroke={colors.color1}  
                fillOpacity={1} 
                fill="url(#colorUv)" />


            </AreaChart>
        </div>
    );
};

export default CoinChart;