import { useState } from "react";
import "./champtips.styles.css";
import { ChampTipsMobile } from "./ChampTipsMobile";
import { ChampTipsTabletDesktop } from "./ChampTipsTabletDesktop";
import { useTranslations } from "../Hooks/useTranslations";
import { useObserver } from "../Hooks/useObserver";

export function ChampTips({allyTips, enemyTips}) {
    const [ref, visible] = useObserver();

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
        <div 
        ref={ref}
        className="champ-tips-div">
            <section className={`champ-tips-mobile ${visible ? 'visible' : ''}`}>

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
            <section className={`champ-tips-tabletDesktop ${visible ? 'visible' : ''}`}>

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