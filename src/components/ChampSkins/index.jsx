import { useRef, useState } from 'react';
import './champskins-h2.styles.css';
import './champskins.styles.css';
import { useObserver } from '../Hooks/useObserver';
import { getOptimizedImg, getLocalImg } from '../../utils/imgOptimizations';

export function ChampSkins({skins, champName}) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [ref, visible] = useObserver();
    const scrollRef = useRef(null);

    const handleScroll = (e) => {
        const container = e.target;
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        const totalScrollable = scrollWidth - clientWidth;
        const progress = scrollLeft / totalScrollable;

        const numberOfSkins = skins.length;

        let index = Math.round(progress * (numberOfSkins - 1));

        if (scrollLeft <= 5) index = 0;
        if (scrollLeft >= totalScrollable - 5) index = numberOfSkins - 1;

        setCurrentIndex(index);
    };

    const scroll = (direction) => {
        const { current } = scrollRef;
        const scrollAmount = current.clientWidth;
        
        if (direction === 'left') {
            current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div 
        ref={ref}
        className="champ-skins-div">
            <h2 className={visible ? "visible" : ""}>Skins</h2>
            <section 
            className={`champ-skins ${visible ? "visible" : ""}`}
            aria-roledescription='carousel'
            aria-label={`Available skins for ${champName}`}>
                <div className="arrows">
                    <button 
                    className="nav-arrow left" 
                    onClick={() => scroll('left')}
                    aria-label='See previous skin'>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden='true'><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button 
                    className="nav-arrow right" 
                    onClick={() => scroll('right')}
                    aria-label='See next skin'>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden='true'><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                </div>
                <div 
                className="skins-container" 
                onScroll={handleScroll} 
                ref={scrollRef}
                role='group'
                aria-live='polite'>
                    {skins.map((skin, index) => (
                        <div 
                        className="skin-card" 
                        key={skin.id} 
                        role='group'
                        aria-roledescription='slide'
                        aria-label={`Skin ${index + 1} de ${skins.length}: ${skin.name}`}>
                            <img 
                            src={champName == "Fiddlesticks" ? getLocalImg(skin.img) : getOptimizedImg(skin.img)} 
                            alt={`Splash art da skin ${skin.name} de ${champName}`} />
                            <h3 aria-hidden='true'>{skin.name.toLowerCase() != 'default' ? skin.name : champName}</h3>
                        </div>
                    ))}
                </div>
                <div className="skins-dots" role='tablist' aria-label='Skins progress'>
                    {skins.map((_, index) => (
                        <div 
                        key={index} 
                        className={`dot ${currentIndex === index ? 'active' : ''}`} 
                        role='tab'
                        aria-selected={currentIndex == index}
                        aria-label={`Ir para skin ${index + 1}`}/>
                    ))}
                </div>
            </section>
        </div>
    )
}