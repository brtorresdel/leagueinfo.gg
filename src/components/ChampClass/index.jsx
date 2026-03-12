import { ClassIcon } from "../ClassIcon";
import "./champclass.styles.css";

export function ChampClass({className}) {
    return (
        <>
            <div className="class-div-MobileandTablet">
                <p>{className.toLowerCase()}</p>
                <ClassIcon className={className.toLowerCase()} />
            </div>
            <div className="class-div-desktop">
                <div className="role-badge" data-tooltip={className.toLowerCase()}>
                    <ClassIcon className={className.toLowerCase()} />
                </div>
            </div>
        </>
    )
}