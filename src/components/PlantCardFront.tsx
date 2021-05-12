import React from "react";
import PropTypes from 'prop-types';
import "../styles/card.css";
import housePlant1 from "../images/house_plant1.jpeg";

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
    data: any
   

}

const PlantCard: React.FC<Props> = ({ onClick, data }) => {
    //const [daysRemaining, setDaysRemaining] = useState(0);
  const name = data[0].name
  const description = data[0].description;

    // const setInitialWaterDay = () => {
    //     const plantDataClone = [...plantData];
    //     const waterPhase1 = plantDataClone[0].waterPhase;
    //     setDaysRemaining(waterPhase1);
    // };

    return (
        <div className="card-container">
            <div className="card-body">
                <img src={housePlant1} className="card-image" />
                <div className="card-content">
                    <div className="card-title">{name}</div>
                    <div className="card-description">
                       {description}
                    </div>
                </div>
                <div className="card-buttons">
                    <button onClick={onClick}>View Health</button>

                </div>
            </div>
        </div>
    );
};

export default PlantCard;

PlantCard.propTypes = {
    onClick: PropTypes.any,
    data: PropTypes.any
}