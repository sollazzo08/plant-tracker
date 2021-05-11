import React from "react";
import "../styles/card.css";

const PlantCard: React.FC = () => {
    return (
        <div className="card-container">
            <div className="card-body">
                <img />
                <div className="card-content">
                    <div className="card-title"></div>
                    <div className="card-description"></div>
                </div>
            </div>
        </div>
    );
};

export default PlantCard;
