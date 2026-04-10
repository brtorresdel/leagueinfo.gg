import { useState } from "react";
import { ClassIcon } from "../ClassIcon";
import './homechampcard.styles.css';
import { useNavigate } from "react-router";

export function HomeChampCard ({champion, index}) {

    const navigate = useNavigate();

    const handleCardClick = (champId) => {
        navigate(`/champion/${champId}`)
    }

    const [imgLoad, setImgLoad] = useState(false);

    return (
        <div key={champion.id} 
        className="champion-card" 
        style={{'--delay': index}}
        onClick={() => handleCardClick(champion.formatedName)}>
            <div className="champion-container">
                <div className={`img-wrapper ${!imgLoad ? 'loading': ''}`}>
                    {!imgLoad && <div className="skeleton"></div>}
                    <img 
                    src={champion.tile} 
                    alt={champion.name}
                    onLoad={() => setImgLoad(true)}
                    loading="lazy"
                    className={imgLoad ? 'fade-in' : 'img-hidden'} />
                </div>
                <div className='champion-content'>
                    <div className="champion-classes">
                        {champion.classes.map((champClass, index) => (
                            <div className="class-icon-div">
                                <ClassIcon key={index} className={champClass} />
                            </div>
                        ))}
                    </div>
                    <div className="champion-title">
                        <h1>{champion.name}</h1>
                        <h3>{champion.title}</h3>
                    </div>
                </div>
            </div>
                    <h3>{champion.name}</h3>
        </div>)
}