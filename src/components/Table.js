import React from 'react';
import { useState } from 'react';
import TableLine from './TableLine';
import ToTop from './ToTop';

const Table = ({coinsData}) => {
    const [rangeNumber, setRangeNumber] = useState(100);
    const [orderBy, setOrderBy] = useState("");

    const tableHeader = [
        "Prix",
        "Market Cap",
        "Volume",
        "1h",
        "1j",
        "7j",
        "1m",
        "6m",
        "1a",
        "ATH"
    ]

    return (
        <div className="table-container">
            <ul className="table-header">
                <div className="range-container">
                    <span>
                        Top{" "} 
                        <input type='text' value={rangeNumber} 
                        onChange={(e) => setRangeNumber(e.target.value) }/> 
                    </span>
                    <input type="range" min="1" max="250" value={rangeNumber}
                    onChange={(e) => setRangeNumber(e.target.value) }/> 
                    <ToTop />
                </div>

                
                

                {/* //?Affichage des titres de colonnes  et le tri*/}
                {tableHeader.map((el) => (

                    <li key={el}> 
                    <input type="radio" name="header-el" id={el} defaultChecked={el === orderBy || el === orderBy + "reverse" ? true : false}
                    onClick={() => {
                        if (el === orderBy) {
                            setOrderBy(el + "reverse");    
                    }
                    else {
                        setOrderBy(el);
                    }}}
                    />
                    <label htmlFor={el}>{el}</label> 
                    </li>
                ))}
            </ul>

            {coinsData && coinsData
            .slice(0, rangeNumber) //? Pour afficher le nombre de crypto voulu

            .sort((a, b) => {

                switch (orderBy) {
                    case "Prix":
                        return a.current_price - b.current_price;
                    case "Prixreverse":
                        return b.current_price - a.current_price;
                    case "Market Cap":
                        return a.market_cap - b.market_cap;
                    case "Market Capreverse":
                        return b.market_cap - a.market_cap;
                    case "Volume":
                        return a.total_volume - b.total_volume;
                    case "Volumereverse":
                        return b.total_volume - a.total_volume;
                    case "1h":
                        return a.price_change_percentage_1h_in_currency - b.price_change_percentage_1h_in_currency;
                    case "1hreverse":
                        return b.price_change_percentage_1h_in_currency - a.price_change_percentage_1h_in_currency;
                    case "1j":
                        return a.price_change_percentage_24h_in_currency - b.price_change_percentage_24h_in_currency;
                    case "1jreverse":
                        return b.price_change_percentage_24h_in_currency - a.price_change_percentage_24h_in_currency;
                    case "7j":
                        return a.price_change_percentage_7d_in_currency - b.price_change_percentage_7d_in_currency;
                    case "7jreverse":
                        return b.price_change_percentage_7d_in_currency - a.price_change_percentage_7d_in_currency;
                    case "1m":
                        return a.price_change_percentage_30d_in_currency - b.price_change_percentage_30d_in_currency;
                    case "1mreverse":
                        return b.price_change_percentage_30d_in_currency - a.price_change_percentage_30d_in_currency;
                    case "6m":
                        return a.price_change_percentage_200d_in_currency - b.price_change_percentage_200d_in_currency;
                    case "6mreverse":
                        return b.price_change_percentage_200d_in_currency - a.price_change_percentage_200d_in_currency;
                    case "1a":
                        return a.price_change_percentage_1y_in_currency - b.price_change_percentage_1y_in_currency;
                    case "1areverse":
                        return b.price_change_percentage_1y_in_currency - a.price_change_percentage_1y_in_currency;
                    case "ATH":
                        return a.ath_change_percentage - b.ath_change_percentage;
                    case "ATHreverse":
                        return b.ath_change_percentage - a.ath_change_percentage;
                    default:
                        return a.market_cap_rank - b.market_cap_rank;
                }
            })
            .map((coin, index) => ( <TableLine coin={coin} index={index} key={coin.id}/>

                


            ))}

        </div>
    );
};

export default Table;