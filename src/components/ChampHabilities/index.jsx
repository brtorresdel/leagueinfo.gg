import { useState } from "react";
import { HabilityIcon } from "../HabilityIcon";
import "./champhabilities.styles.css";
import { HabilityVideo } from "../HabilityVideo";
import { useTranslations } from "../Hooks/useTranslations";

export function ChampHabilities ({habilities}) {
    const { t } = useTranslations();

    const [activeHability, setActiveHability] = useState(habilities[0]);

    const toggleActiveHability = (habilityPosition) => {
        setActiveHability(habilities[habilityPosition]);
    }

    return (
        <div className="champ-habilities-div">
            <section className="champ-habilities">
                <h2>{t("champInfo.abilities")}</h2>
                <div className="habilities-data">
                    <div className="hability-data-div">
                        <div className="habilities-icons">
                            {habilities.map((hab, index) => {
                                return <HabilityIcon hability={hab} key={hab.key} onClick={() => toggleActiveHability(index)} active={hab.key == activeHability.key}/>
                            })}
                        </div>
                        <div className="hability-info">
                            <h3 className="hability-title">{activeHability.name} ({activeHability.key})</h3>
                            <HabilityVideo src={activeHability.video} screen='mobile' />
                            <p className="hability-description">{activeHability.description}</p>
                        </div>
                    </div>
                    <HabilityVideo src={activeHability.video} screen='tablet-desktop' />
                </div>
            </section>
        </div>
    )
}