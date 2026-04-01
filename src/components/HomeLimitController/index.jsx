import './homelimitcontroller.styles.css';

export function HomeLimitController ({onClick, show}) {
    return (
        <div className="limit-controller-div">
            <button 
            className="limit-controller-btn"
            onClick={onClick}
            style={{ display: show ? 'block' : 'none' }}>
                <span>Listar mais campeões...</span>
            </button>
        </div>
    )
}