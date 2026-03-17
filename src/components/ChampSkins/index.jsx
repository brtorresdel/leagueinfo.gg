import { useState } from 'react';
import './champskins.styles.css';

export function ChampSkins({skins, champName}) {

    const [currentIndex, setCurrentIndex] = useState(0);

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

    return (
        <div className="champ-skins-div">
            <h2>Skins</h2>
            <section className="champ-skins-mobile">
                <div className="skins-container" onScroll={handleScroll}>
                    {skins.map((skin) => (
                        <div className="skin-card" key={skin.id} >
                            <img src={skin.img} alt={skin.name} />
                            <h3>{skin.name.toLowerCase() != 'default' ? skin.name : champName}</h3>
                        </div>
                    ))}
                </div>
                <div className="skins-dots">
                    {skins.map((_, index) => (
                        <div key={index} className={`dot ${currentIndex === index ? 'active' : ''}`} />
                    ))}
                </div>
            </section>
        </div>
    )
}