import { ClassIcon } from "../ClassIcon";
import "./champclass.styles.css";

export function ChampClass({className}) {
    return (
        <>
            <div className="class-div">
                <p>{className.toLowerCase()}</p>
                <ClassIcon className={className.toLowerCase()} />
            </div>
        </>
    )
}