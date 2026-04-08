import { useTranslations } from '../Hooks/useTranslations';
import './homelimitcontroller.styles.css';

export function HomeLimitController ({onClick, show}) {
    const { t } = useTranslations();

    return (
        <div className="limit-controller-div">
            <button 
            className="limit-controller-btn"
            onClick={onClick}
            style={{ display: show ? 'block' : 'none' }}>
                <span>{t("home.champList.btn")}</span>
            </button>
        </div>
    )
}