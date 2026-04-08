import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export function useTranslations() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useTranslation deve ser usado dentro de um LanguageProvider");
    }
    return context;
}