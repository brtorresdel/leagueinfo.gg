import "./classicon.styles.css"

export function ClassIcon ({className}) {
    return <img src={`./src/assets/img/${className}_icon.png`} alt="" className="class-icon"/>
}