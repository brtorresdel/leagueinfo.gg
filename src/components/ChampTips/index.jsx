import { useState } from "react";
import "./champtips.styles.css";
import { ChampTipsMobile } from "./ChampTipsMobile";
import { ChampTipsTabletDesktop } from "./ChampTipsTabletDesktop";

export function ChampTips({allyTips, enemyTips}) {
    const [allyTipsView, setAllyTipsView] = useState('active');
    const [enemyTipsView, setEnemyTipsView] = useState('');

    const toggleAllyTips = () => {
        if (!allyTipsView) {
            setAllyTipsView('active');
        } else {
            setAllyTipsView('');
        };

        if (enemyTipsView) setEnemyTipsView('');
    };

    const toggleEnemyTips = () => {
        if (!enemyTipsView) {
            setEnemyTipsView('active');
        } else {
            setEnemyTipsView('');
        };

        if (allyTipsView) setAllyTipsView('');
    };

    return (
        <div className="champ-tips-div">
            <section className="champ-tips-mobile">

                <ChampTipsMobile  
                view={allyTipsView} 
                toggle={toggleAllyTips} 
                title="Dicas de mecânica" 
                list={allyTips} 
                icon="check" 
                type="ally"/>

                <ChampTipsMobile  
                view={enemyTipsView} 
                toggle={toggleEnemyTips} 
                title="Estratégias de confronto" 
                list={enemyTips} 
                icon="exclamation" 
                type="enemy"/>

            </section>
            <section className="champ-tips-tabletDesktop">

                <ChampTipsTabletDesktop ally={{
                    tipsToggle: toggleAllyTips,
                    tipsList: allyTips,
                    tipsView: allyTipsView
                }} enemy={{
                    tipsToggle: toggleEnemyTips,
                    tipsList: enemyTips,
                    tipsView: enemyTipsView
                }} />

            </section>
        </div>
    )
}