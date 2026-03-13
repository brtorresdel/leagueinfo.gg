import "./habilityicon.styles.css";

export function HabilityIcon ({hability, onClick}) {
    return (
        <img src={hability.icon} onClick={onClick}/>
    )
}