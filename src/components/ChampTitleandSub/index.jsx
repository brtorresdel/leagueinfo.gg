import "./champtitleandsub.styles.css"

export function ChampTitleandSub({name, title}) {
    return (
        <div className="name-n-title">
            <h1 role="doc-title">{name}</h1>
            <h3 role="doc-subtitle">{title}</h3>
        </div>
    )
}