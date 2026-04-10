import './commons.styles.css';
import checkIcon from '../../../assets/icons/check.svg';
import exclamationIcon from '../../../assets/icons/exclamation.svg';
import arrowIcon from '../../../assets/icons/arrow.svg';

function ChampTipsBtn({toggle, title, arrow, active}) {
    return (
        <button className={`champ-tips-title ${active && "active-chefron"}`} onClick={toggle}>
            <h2>{title}</h2>
            {arrow && <img src={arrowIcon} className='arrow'/>}
        </button>
    )
}

function ChampsTipsList ({list, icon, type, active}) {
    return (
        <div className={`champ-tips-list ${active && "active-chefron"}`}>
            <ul>
                {list.map(tip => {
                    return <li>
                        <img src={icon == 'check' ? checkIcon : exclamationIcon} className={type}/>
                        {tip}
                    </li>
                })}
            </ul>
        </div>
    )
}

export { ChampTipsBtn, ChampsTipsList }