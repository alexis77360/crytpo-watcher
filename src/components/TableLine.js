import React from 'react';
import PercentChange from './PercentChange';

const TableLine = ({coin, index}) => {

    //? Formate le prix si le nombre de chiffres est inférieur à 4
    const priceFormater = (num) => {
        if(Math.round(num).toString().length < 4) {
            return new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(num);   
    }else {
        return num;
    }};

    const mktCapFormater = (num) => {
        //? retire les 6 derniers chiffres
        let newNum = String(num).split("").slice(0, -6)
        return Number(newNum.join(""));


    };

    return (
        <div className='table-line'>
            <div className="infos-container">
                <span >* </span>
                <p>{index + 1 } </p>
                <img src={coin.image} alt="crypto-logo" height='20' />
                <div className="infos">
                    <div className="chart-img">
                        <img src="./assets/chart-icon.svg" alt="chart-icon" />
                    </div>

                    <h4>{coin.name}</h4>

                    <span>- {coin.symbol.toUpperCase()}</span>

                    <a target='_blank'
                    rel="noreferrer" 
                    href={"https://www.coingecko.com/fr/pi%C3%A8ces/"
                    + coin.id}
                    >
                        <img src="./assets/info-icon.svg" alt="crypto-icon" />
                    </a>

                </div>
            </div> 

            <p>{priceFormater(coin.current_price).toLocaleString()} $</p>

            <p className='mktcap'>{mktCapFormater(coin.market_cap).toLocaleString()} M $</p>

            <p className='volume'>{coin.total_volume.toLocaleString()} $</p>

            <PercentChange percent={coin.price_change_percentage_1h_in_currency} />

            <PercentChange percent={coin.price_change_percentage_24h_in_currency} />

            <PercentChange percent={coin.price_change_percentage_7d_in_currency} />

            <PercentChange percent={coin.price_change_percentage_30d_in_currency} />

            <PercentChange percent={coin.price_change_percentage_200d_in_currency} />

            <PercentChange percent={coin.price_change_percentage_1y_in_currency} />

            {/*// ? Ath est a son plus haut historique ( -3% ) alors on affiche ATH sinon on affiche le pourcentage */}
            {coin.ath_change_percentage > -3 ? (
                <p> ATH </p>
            ):
            <PercentChange percent={coin.ath_change_percentage} />
            }

        </div>

    );
};

export default TableLine;