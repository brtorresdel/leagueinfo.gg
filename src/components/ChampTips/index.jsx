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
                <div className={`champ-tips ${allyTipsView}`}>
                    <button onClick={toggleAllyTips}>
                        <h2>Dicas de mecânica</h2>
                        <img src="./src/assets/icons/arrow.svg" />
                    </button>
                    <div className="champ-tips-list">
                        <ul>
                            {allyTips.map(tip => {
                                return <li>
                                    <img src="./src/assets/icons/check.svg" className="ally"/>
                                    {tip}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className={`champ-tips ${enemyTipsView}`}>
                    <button onClick={toggleEnemyTips}>
                        <h2>Estratégias de confronto</h2>
                        <img src="./src/assets/icons/arrow.svg" />
                    </button>
                    <div className="champ-tips-list">
                        <ul>
                            {enemyTips.map(tip => {
                                return <li>
                                    <img src="./src/assets/icons/exclamation.svg" className="enemy"/>
                                    {tip}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}