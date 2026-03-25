import './homehero.styles.css';

export function HomeHero() {
    const splashUrl = "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_8.jpg)";

    return (
        <div className="home-hero" style={{'backgroundImage': splashUrl}}>
            Olá!
        </div>
    )
}