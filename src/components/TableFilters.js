import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStableState } from '../action/stable.action';
import { setListDisplay } from '../action/list.action';




const TableFilters = () => {

    const [showStable, setShowStable] = React.useState(true);
    const [showFavList, setShowFavList] = React.useState(false);

    
    //! Le dispatch est utilisé pour envoyer une action à Redux.
    const dispatch = useDispatch();

    //? Mettre à jour le state de showStable dans le store redux
    useEffect(() => {
        dispatch(setStableState(showStable));
        dispatch(setListDisplay(showFavList));

    }, [showStable, showFavList]);



    return (
        <div className='table-filters'>
            <div className="table-filters-container">
                <div className="stable-checkbox-container">

                    <input type="checkbox" id="stableCoin" defaultChecked={true} onChange={() => setShowStable(!showStable)} />

                    <label htmlFor="stableCoin">{showStable ? "Avec Stable Coin" : "Sans Stable Coin"}
                    </label>

                </div>
            <div className={showFavList ? "no-list-btn" : "no-list-btn active"} onClick={() => setShowFavList(false)}>

                <p> Aucune Liste</p>
            </div>  

            <div className={showFavList ? "fav-list active" : "fav-list"} onClick={() => setShowFavList(true)}>
                <p> Liste Favoris</p>
                <img src="./assets/star-full.svg" alt="star" />
                </div>  
            </div>
        </div>
    );
};

export default TableFilters;