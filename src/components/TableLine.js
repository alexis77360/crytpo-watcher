import React from 'react';

const TableLine = ({coin, index}) => {
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

                    <a target='_blank' href={"https://www.coingecko.com/fr/pi%C3%A8ces/" + coin.id}>
                        <img src="./assets/info-icon.svg" alt="crypto-icon" />
                    </a>

                </div>
            </div> 
            <p>{coin.current_price.toLocaleString()} $</p>
        </div>

    );
};

export default TableLine;