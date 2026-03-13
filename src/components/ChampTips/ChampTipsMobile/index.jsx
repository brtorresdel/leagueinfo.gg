import { ChampTipsBtn, ChampsTipsList } from "../Commons";

export function ChampTipsMobile({view, toggle, title, list, icon, type}) {
    return (
        <div className={`champ-tips`}>
            <ChampTipsBtn toggle={toggle} title={title} arrow active={view}/>
            <ChampsTipsList list={list} icon={icon} type={type} active={view}/>
        </div>
    )
}