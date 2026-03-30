import { Loading } from './../Loading/index';

export function HomeChampList ({champions}) {
    if (!champions || champions.length === 0) {
        return <Loading />;
    }

    return (
        <div className="home-champions-list">
            {champions.map((champion, index) => (
                <div key={index} className="champion-card">
                    <img src={champion.image} alt={champion.name} />
                    <h3>{champion.name}</h3>
                    <p>{champion.title}</p>
                </div>
            ))}
        </div>
    )
}