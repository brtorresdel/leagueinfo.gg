import { ChampsTipsList, ChampTipsBtn } from "../Commons";
import './champtipstabletdesktop.styles.css';

export function ChampTipsTabletDesktop ({ally, enemy}) {
    return (
        <>
            <div className="champ-tips-options">
                <ChampTipsBtn title={ally.title} toggle={ally.tipsToggle} active={ally.tipsView}/>
                <ChampTipsBtn title={enemy.title} toggle={enemy.tipsToggle} active={enemy.tipsView}/>
            </div>
            <div className="champ-tip-list-content">
                <div className={`champ-tip-list-track ${ally.tipsView ? 'ally' : 'enemy'}`}>
                    <ChampsTipsList list={ally.tipsList} icon="check" type="ally" active={ally.tipsView}/>
                    <ChampsTipsList list={enemy.tipsList} icon="exclamation" type="enemy" active={enemy.tipsView}/>
                </div>
            </div>
        </>
    )
}