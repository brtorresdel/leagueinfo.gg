import { useState } from 'react'
import './languagesbtn.styles.css'

export function LanguagesBtn() {

    const [languagePref, setLanguagePref] = useState('pt-br');
    const [languagesListView, setLanguagesListView] = useState(false);

    const AVAILABLE_LANGUAGES = ['pt-br', 'en-us'];

    return(
        <div className="languages-bnt-div">
            <button className="languages-btn"
            onClick={() => {
                setLanguagesListView(!languagesListView);
            }}>
                <img src="./src/assets/icons/arrow.svg" alt="" className='arrow' />
                <img src={`./src/assets/img/${languagePref}.png`} alt="" className='flag-icon'/>
            </button>
            <ul className={`available-languages ${languagesListView ? 'active' : ''}`}>
                {
                    AVAILABLE_LANGUAGES.map((aval, index) => {
                        return <li 
                        key={index}
                        onClick={() => {
                            setLanguagePref(aval);
                            setLanguagesListView(!languagesListView);
                        }}>
                            {aval}
                            <img src={`./src/assets/img/${aval}.png`} alt=""/>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}