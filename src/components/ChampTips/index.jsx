import { useState } from "react";
import "./champtips.styles.css";
import { ChampTipsMobile } from "./ChampTipsMobile";
import { ChampTipsTabletDesktop } from "./ChampTipsTabletDesktop";
import { useTranslations } from "../Hooks/useTranslations";

export function ChampTips({allyTips, enemyTips}) {
    const { t } = useTranslations();

    const [allyTipsView, setAllyTipsView] = useState('active');
    const [enemyTipsView, setEnemyTipsView] = useState('');

    const toggleAllyTips = () => {
        !allyTipsView && setAllyTipsView('active');

        enemyTipsView && setEnemyTipsView('');
    };

    const toggleEnemyTips = () => {
        !enemyTipsView && setEnemyTipsView('active');

        allyTipsView && setAllyTipsView('');
    };

    return (
        <div className="champ-tips-div">
            <section className="champ-tips-mobile">

                <ChampTipsMobile  
                view={allyTipsView} 
                toggle={toggleAllyTips} 
                title={t("champInfo.allyTips")} 
                list={allyTips} 
                icon="check" 
                type="ally"/>

                <ChampTipsMobile  
                view={enemyTipsView} 
                toggle={toggleEnemyTips} 
                title={t("champInfo.enemyTips")} 
                list={enemyTips} 
                icon="exclamation" 
                type="enemy"/>

            </section>
            <section className="champ-tips-tabletDesktop">

                <ChampTipsTabletDesktop ally={{
                    tipsToggle: toggleAllyTips,
                    tipsList: allyTips,
                    tipsView: allyTipsView,
                    title: t("champInfo.allyTips")
                }} enemy={{
                    tipsToggle: toggleEnemyTips,
                    tipsList: enemyTips,
                    tipsView: enemyTipsView,
                    title: t("champInfo.enemyTips")
                }} />

            </section>
        </div>
    )
}