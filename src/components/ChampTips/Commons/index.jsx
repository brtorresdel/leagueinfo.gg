import './commons.styles.css';

function ChampTipsBtn({toggle, title, arrow, active}) {
    return (
        <button className={active && "active-chefron"} onClick={toggle}>
            <h2>{title}</h2>
            {arrow && <img src="./src/assets/icons/arrow.svg" />}
        </button>
    )
}

function ChampsTipsList ({list, icon, type, active}) {
    return (
        <div className={`champ-tips-list ${active && "active-chefron"}`}>
            <ul>
                {list.map(tip => {
                    return <li>
                        <img src={`./src/assets/icons/${icon}.svg`} className={type}/>
                        {tip}
                    </li>
                })}
            </ul>
        </div>
    )
}

export { ChampTipsBtn, ChampsTipsList }