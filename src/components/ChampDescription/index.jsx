import "./champdescription.styles.css"

export function ChampDescription({description}) {
    return(
        <div className="champ-description-div">
            <section className="champ-description">
                {description}
            </section>
        </div>
    )
}