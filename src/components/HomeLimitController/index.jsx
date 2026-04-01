import './homelimitcontroller.styles.css';

export function HomeLimitController ({limit, setLimit}) {
    return (
        <div className="limit-controller-div">
            <button className="limit-controller-btn">
                <span>Listar mais campeões...</span>
            </button>
        </div>
    )
}