import React, { useEffect } from 'react';
import { useState } from 'react';
import colors from "../styles/_settings.scss";

//? Gere les couleurs avec Sass pour les %

const PercentChange = ({percent}) => {

    const [color, setColor] = useState(colors.green);

    useEffect(() => {
        if (percent) {
            if (percent >= 0) {
                setColor(colors.green1);
            } else {
                setColor(colors.red1);
            }
        }else{
            setColor(colors.white1);
        }
    }, [percent]); //?si le pourcentage change, on change la couleur 


    return (
        <div>
            <p className="percent-change-container" style={{color}}>
                {percent ? percent.toFixed(1) + "%" : "-"}
            </p>     
        </div>
    );
};

export default PercentChange;