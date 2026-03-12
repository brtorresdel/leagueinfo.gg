import "./champtitleandsub.styles.css"

export function ChampTitleandSub({name, title}) {
    return (
        <>
            <div className="name-n-title">
                <h1>{name}</h1>
                <h3>{title}</h3>
            </div>
        </>
    )
}