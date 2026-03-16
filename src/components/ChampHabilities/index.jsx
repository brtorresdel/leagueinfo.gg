import { useState } from "react";
import { HabilityIcon } from "../HabilityIcon";
import "./champhabilities.styles.css";

export function ChampHabilities ({habilities}) {
    const [activeHability, setActiveHability] = useState(habilities[0]);

    const toggleActiveHability = (habilityPosition) => {
        setActiveHability(habilities[habilityPosition]);
    }

    return (
        <div className="champ-habilities-div">
            <section className="champ-habilities">
                <h2>Habilidades</h2>
                <div className="habilities-icons">
                    {habilities.map((hab, index) => {
                        return <HabilityIcon hability={hab} key={hab.key} onClick={() => toggleActiveHability(index)} active={hab.key == activeHability.key}/>
                    })}
                </div>
                <div className="hability-info">
                    <h2 className="hability-title">{activeHability.name} ({activeHability.key})</h2>
                    <video 
                    src={activeHability.video} 
                    className="hability-video"
                    autoPlay muted loop></video>
                    <p className="hability-description">{activeHability.description}</p>
                </div>
            </section>
        </div>
    )
}