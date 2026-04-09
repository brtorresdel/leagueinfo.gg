import './homehero.styles.css';
import { useTranslations } from './../Hooks/useTranslations';

export function HomeHero() {
    const splashUrl = "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_8.jpg)";
    const { t } = useTranslations();

    const title = t("home.hero.title").split(', ');

    return (
        <div className="home-hero" style={{'backgroundImage': splashUrl}}>
            <section className="home-hero-content">
                <h1><span className='first'>{title[0]},</span><br className='break'/><span className='second'>{title[1]}</span></h1>
                <h3>
                    {t("home.hero.subtitle")}
                </h3>
            </section>
        </div>
    )
}