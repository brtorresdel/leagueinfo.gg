import "./habilityicon.styles.css";

export function HabilityIcon ({hability, onClick, active}) {
    return (
        <button onClick={onClick} className={`${active ? "active-btn" : ''}`}>
            <img src={hability.icon} />
        </button>
    )
}