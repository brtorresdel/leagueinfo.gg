import { useState, useRef, useEffect } from 'react';
import { ClassIcon } from '../ClassIcon';
import './classeslist.styles.css';

export function ClassesList ({champClasses}) {

    const [classListExibition, setClassListExibition] = useState(false);
    const [selectedClasses, setSelectedClasses] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {  
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setClassListExibition(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const toggleClassSelection = (c) => {
        if(selectedClasses.includes(c)) {
            setSelectedClasses(selectedClasses.filter(sc => sc !== c));
        } else {
            setSelectedClasses([...selectedClasses, c]);
        }
        console.log(selectedClasses);
    }

    const toggleClassListExibition = (exib) => {
        setClassListExibition(exib);
    };

    return (
        <div className="classes-list-div">
            <div 
            className={`selected-classes-container ${classListExibition ? 'active' : ''}`} 
            onClick={() => toggleClassListExibition(!classListExibition)}
            tabIndex="0"
            ref={containerRef}>
                <div className="selected-classes-div">
                    <div 
                    className="selected-classes"
                    >
                        {selectedClasses.map((c, i) => {
                            return <ClassIcon className={c} key={i}/>
                        })}

                    </div>
                    <div>
                        <img src="./src/assets/icons/arrow.svg" className={`arrow-icon ${classListExibition && 'active'}`}/>
                    </div>
                </div>
                <ul className={`classes-list ${classListExibition ? 'active' : ''}`}>
                    {
                        champClasses.map((c, i) => {
                            return <li className='class-item' key={i}>
                                <button 
                                className={selectedClasses.includes(c) ? 'active' : ''}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleClassSelection(c);
                                }}>
                                    <ClassIcon className={c} />
                                    {c}
                                </button>
                            </li>
                        })
                    }
                </ul>
            </div>
           
        </div>  
    )
}