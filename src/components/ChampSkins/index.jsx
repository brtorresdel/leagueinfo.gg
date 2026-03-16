import './champskins.styles.css';

export function ChampSkins({skins}) {
    return (
        <div className="champ-skins-div">
            <section className="champ-skins">
                {skins.map(skin => <h1 key={skin.num}>{skin.name}</h1>)}
            </section>
        </div>
    )
}