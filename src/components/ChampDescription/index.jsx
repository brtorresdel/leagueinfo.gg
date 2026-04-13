import { useObserver } from "../Hooks/useObserver"
import "./champdescription.styles.css"

export function ChampDescription({description}) {

    const [ref, visible] = useObserver({threshold: 0.2});

    return(
        <div 
        className="champ-description-div"
        ref={ref}>
            <section 
            className={`champ-description ${visible ? 'visible' : ''}`}
            aria-label="Champ description">
                {description}
            </section>
        </div>
    )
}