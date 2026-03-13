import { ChampTipsBtn, ChampsTipsList } from "../Commons";

export function ChampTipsMobile({view, toggle, title, list, icon, type}) {
    return (
        <div className={`champ-tips ${view}`}>
            <ChampTipsBtn toggle={toggle} title={title} arrow/>
            <ChampsTipsList list={list} icon={icon} type={type}/>
        </div>
    )
}