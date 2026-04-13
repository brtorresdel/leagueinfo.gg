import './notfoundelement.styles.css';
import ataIcon from "../../assets/img/ata_emote.webp"

export function NotFoundElement ({message}) {
    return (
        <div className="not-found-div">
            <p>{message}</p>
            <img src={ataIcon} alt="Not Found" />
        </div>
    )
}