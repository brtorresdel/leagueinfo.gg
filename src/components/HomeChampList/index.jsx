import { Loading } from './../Loading/index';
import './homechamplist.styles.css'
import { ChampTitleandSub } from './../ChampTitleandSub/index';
import { ClassIcon } from './../ClassIcon/index';
import { HomeChampCard } from '../HomeChampCard';

export function HomeChampList ({championsList, limit}) {
    if (!championsList || championsList.length === 0) {
        return <Loading />;
    }

    return (
        <div className="home-champions-list">
            {championsList.slice(0, limit).map((champion) => (
                <HomeChampCard champion={champion} />
            ))}
        </div>
    )
}