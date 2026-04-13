import { ChampClass } from '../ChampClass';
import { ChampTitleandSub } from '../ChampTitleandSub';
import './ChampHero.style.css'
import { getOptimizedImg, getLocalImg } from '../../utils/imgOptimizations';

export function ChampHero ({champInfo}) {

    const splashUrl = `url(${champInfo.name == "Fiddlesticks" ? getLocalImg(champInfo.skins[0].img) : getOptimizedImg(champInfo.skins[0].img)})`;

    return (
        <>
            <div 
            className="hero" style={{'backgroundImage': splashUrl}}
            role='banner'>
                <section className="hero-section">
                    <ChampTitleandSub name={champInfo.name} title={champInfo.title}/>
                    <div 
                    className="champ-classes"
                    role='list'
                    aria-label='Champ classes'>
                        {champInfo.classes.map((className, index) => {
                            return <ChampClass className={className} index={index} />
                        })}
                    </div>
                </section>
            </div>
        </>
    )
}