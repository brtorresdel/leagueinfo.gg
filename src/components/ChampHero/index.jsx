import { ChampClass } from '../ChampClass';
import { ChampTitleandSub } from '../ChampTitleandSub';
import './ChampHero.style.css'

export function ChampHero ({champInfo}) {

    const splashUrl = `url(${champInfo.skins[0].img})`;

    return (
        <>
            <div className="hero" style={{'--bg-hero': splashUrl}}>
                <section className="hero-section">
                    <ChampTitleandSub name={champInfo.name} title={champInfo.title}/>
                    <div className="champ-classes">
                        {champInfo.classes.map(className => {
                            return <ChampClass className={className} />
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}