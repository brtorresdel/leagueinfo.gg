import "./classicon.styles.css"
import assassinIcon from '../../assets/img/assassin_icon.png'
import fighterIcon from '../../assets/img/fighter_icon.png'
import mageIcon from '../../assets/img/mage_icon.png'
import marksmanIcon from '../../assets/img/assassin_icon.png'
import supportIcon from '../../assets/img/assassin_icon.png'
import tankIcon from '../../assets/img/assassin_icon.png'

const classIconsList = {
    assassin: assassinIcon,
    fighter: fighterIcon,
    mage: mageIcon,
    marksman: marksmanIcon,
    support: supportIcon,
    tank: tankIcon
};

export function ClassIcon ({className}) {
    return <img src={classIconsList[className.toLowerCase()]} alt="" className="class-icon"/>
}