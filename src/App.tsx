import React, {useState, useEffect} from "react";
import ReactCardFlip from "react-card-flip";
import PlantCardFront from './components/PlantCardFront'
import PlantCardBack from './components/PlantCardBack';

import "./App.css";
const plant_Data: { name: string; description: string; waterPhase: number, light: string }[] = [
    {
        name: "Snake Plant",
        description:
            "The snake plant comes from western and southern Africa, but is also found wild in more tropical climates like Florida and Hawaii, due to favorable tropical conditions.",
        waterPhase: 3,
        light: "Indirect Light",
    },
];


const App: React.FC = () => {
    const [isFlipped, setIsFlipped] = useState<any>(false);

    const [plantData, setPlantData] = useState<any>([{}]);

    useEffect(() => {
        setPlantData(plant_Data);
        
    }, []);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

  
    return (
        <div className="App">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack={1.5} flipSpeedBackToFront={1.5}>
                <PlantCardFront data={plantData} key="front" onClick={handleFlip} />
                <PlantCardBack data={plantData} key="back" onClick={handleFlip} />
            </ReactCardFlip>
        </div>
    );
};

export default App;
