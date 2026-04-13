import "./classicon.styles.css"
import assassinIcon from '../../assets/img/assassin_icon.webp'
import fighterIcon from '../../assets/img/fighter_icon.webp'
import mageIcon from '../../assets/img/mage_icon.webp'
import marksmanIcon from '../../assets/img/marksman_icon.webp'
import supportIcon from '../../assets/img/support_icon.webp'
import tankIcon from '../../assets/img/tank_icon.webp'

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