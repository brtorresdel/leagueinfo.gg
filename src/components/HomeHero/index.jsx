import './homehero.styles.css';

export function HomeHero() {
    const splashUrl = "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_8.jpg)";

    return (
        <div className="home-hero" style={{'backgroundImage': splashUrl}}>
            <section className="home-hero-content">
                <h1>CADA CAMPEÃO,<br className='break'/> UMA ESTRATÉGIA</h1>
                <h3>
                    Dados precisos e atualizados da API oficial. Analise habilidades, descubra visuais únicos e prepare-se para o seu próximo confronto!
                </h3>
            </section>
        </div>
    )
}