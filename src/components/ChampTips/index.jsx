import { useState } from "react";
import "./champtips.styles.css";

export function ChampTips({allyTips, enemyTips}) {
    const [allyTipsView, setAllyTipsView] = useState('');
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

                <ChampTipsBlock  
                view={allyTipsView} 
                toggle={toggleAllyTips} 
                title="Dicas de mecânica" 
                list={allyTips} 
                icon="check" 
                type="ally"/>

                <ChampTipsBlock  
                view={enemyTipsView} 
                toggle={toggleEnemyTips} 
                title="Estratégias de confronto" 
                list={enemyTips} 
                icon="exclamation" 
                type="enemy"/>

            </section>
        </div>
    )
}

function ChampTipsBlock({view, toggle, title, list, icon, type}) {
    return (
        <div className={`champ-tips ${view}`}>
                    <button onClick={toggle}>
                        <h2>{title}</h2>
                        <img src="./src/assets/icons/arrow.svg" />
                    </button>
                    <div className="champ-tips-list">
                        <ul>
                            {list.map(tip => {
                                return <li>
                                    <img src={`./src/assets/icons/${icon}.svg`} className={type}/>
                                    {tip}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
    )
}