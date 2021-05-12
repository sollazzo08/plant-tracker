import React from "react";
import PropTypes from "prop-types";
import "../styles/card.css";

//Information and functionality we need for our plant card
/*
    - Plant name
    - Plant description
    - Time frame of watering for plant 
    - Need to keep track of the initial day the plant has been watered 
    - Need to keep track of days remaining till next water phase
    - 
*/

type Props = {
    onClick: () => void;
    data: any;
};

const PlantCardBack: React.FC<Props> = ({ onClick, data }) => {
    const name = data[0].name;


    // const setInitialWaterDay = () => {
    //     const plantDataClone = [...plantData];
    //     const waterPhase1 = plantDataClone[0].waterPhase;
    //     setDaysRemaining(waterPhase1);
    // };

    return (
        <div className="card-container">
            <div className="card-body">
                <div className="card-content">{name}</div>
                <div className="card-buttons">
                    <button onClick={onClick}>View Health</button>
                </div>
            </div>
        </div>
    );
};

export default PlantCardBack;

PlantCardBack.propTypes = {
    onClick: PropTypes.any,
    data: PropTypes.any,
};
