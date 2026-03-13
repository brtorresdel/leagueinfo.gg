function ChampTipsBtn({toggle, title, arrow}) {
    return (
        <button onClick={toggle}>
            <h2>{title}</h2>
            {arrow && <img src="./src/assets/icons/arrow.svg" />}
        </button>
    )
}

function ChampsTipsList ({list, icon, type}) {
    return (
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
    )
}

export { ChampTipsBtn, ChampsTipsList }