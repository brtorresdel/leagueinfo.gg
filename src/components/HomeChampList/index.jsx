import { Loading } from './../Loading/index';
import './homechamplist.styles.css'
import { ChampTitleandSub } from './../ChampTitleandSub/index';
import { ClassIcon } from './../ClassIcon/index';
import { HomeChampCard } from '../HomeChampCard';

export function HomeChampList ({championsList}) {
    if (!championsList || championsList.length === 0) {
        return <Loading />;
    }

    return (
        <div className="home-champions-list">
            {championsList.map((champion) => (
                <HomeChampCard champion={champion} />
            ))}
        </div>
    )
}