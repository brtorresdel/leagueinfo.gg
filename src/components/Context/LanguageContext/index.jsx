/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useEffect } from "react";
import translations from "../../../data/translations.json";

export const LanguageContext = createContext();

export function LanguageProvider({children}) {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en_US');

    useEffect(() => localStorage.setItem('lang', language), [language]);

    const handleLanguage = (newLang) => setLanguage(newLang);

    const t = (path) => {
        return path.split('.').reduce((obj, key) => obj?.[key], translations[language]) || path;
    };

    return (
        <LanguageContext.Provider value={{ language, handleLanguage, t}} >
            {children}
        </LanguageContext.Provider>
    );
}