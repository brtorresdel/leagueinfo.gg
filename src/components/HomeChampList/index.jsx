import { Loading } from './../Loading/index';
import './homechamplist.styles.css'
import { HomeChampCard } from '../HomeChampCard';
import { NotFoundElement } from '../NotFoundElement';
import { useObserver } from '../Hooks/useObserver';

export function HomeChampList ({championsList, limit, isLoading}) {
    const [ref, visible] = useObserver({threshold: 0.2});

    if (isLoading || !championsList || championsList.length === 0) {
        return <Loading />;
    }
    

    if (championsList.length === 0) {
        return <NotFoundElement message="Nenhum campeão encontrado" />;
    }

    return (
        <div 
        ref={ref}
        className={`home-champions-list ${visible ? "visible" : ""}`}>
            {championsList.slice(0, limit).map((champion) => (
                <HomeChampCard champion={champion} />
            ))}
        </div>
    )
}