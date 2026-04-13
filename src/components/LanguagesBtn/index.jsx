import { useState } from 'react'
import './languagesbtn.styles.css'
import { useTranslations } from '../Hooks/useTranslations';
import arrowIcon from '../../assets/icons/arrow.svg'
import brFlag from '../../assets/img/pt_BR.webp'
import usFlag from '../../assets/img/en_US.webp'

export function LanguagesBtn() {

    const flagsIcons = {
        pt_BR: brFlag,
        en_US: usFlag
    }

    const {language, handleLanguage} = useTranslations();

    const [languagePref, setLanguagePref] = useState(language);
    const [languagesListView, setLanguagesListView] = useState(false);


    const AVAILABLE_LANGUAGES = ['pt_BR', 'en_US'];

    return(
        <div className="languages-bnt-div">
            <button className="languages-btn"
            onClick={() => {
                setLanguagesListView(!languagesListView);
            }}>
                <img src={arrowIcon} alt="" className={`arrow ${languagesListView ? "active" : ""}`} />
                <img src={flagsIcons[languagePref]} alt="" className='flag-icon'/>
            </button>
            <ul className={`available-languages ${languagesListView ? 'active' : ''}`}>
                {
                    AVAILABLE_LANGUAGES.map((aval, index) => {
                        return <li 
                        key={index}
                        onClick={() => {
                            setLanguagePref(aval);
                            handleLanguage(aval)
                            setLanguagesListView(!languagesListView);
                        }}>
                            {aval}
                            <img src={flagsIcons[aval]} alt=""/>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}