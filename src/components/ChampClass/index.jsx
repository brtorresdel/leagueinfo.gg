import { ClassIcon } from "../ClassIcon";
import { useTranslations } from "../Hooks/useTranslations";
import "./champclass.styles.css";

export function ChampClass({className, index}) {

    const { t } = useTranslations();

    return (
        <>
            <div className="class-div-MobileandTablet" style={{'--index': index}}>
                <p>{t(`classes.${className.toLowerCase()}`)}</p>
                <ClassIcon className={className.toLowerCase()} />
            </div>
            <div className="class-div-desktop" style={{'--index': index}}>
                <div className="role-badge" data-tooltip={t(`classes.${className.toLowerCase()}`)}>
                    <ClassIcon className={className.toLowerCase()} />
                </div>
            </div>
        </>
    )
}