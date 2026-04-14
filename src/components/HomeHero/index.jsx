import './homehero.styles.css';
import { useTranslations } from './../Hooks/useTranslations';
import { getOptimizedImg } from '../../utils/imgOptimizations';

export function HomeHero() {
    const splashUrl = `url(${getOptimizedImg("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_8.jpg")})`;
    const { t } = useTranslations();

    const rawTitle = t("home.hero.title");
    const [firstPart, ...restParts] = rawTitle.split(',');
    const secondPart = restParts.join(',').trim();

    return (
        <div className="home-hero" style={{'backgroundImage': splashUrl}}>
            <section className="home-hero-content">
                <h1>
                    {secondPart ? (
                        <>
                            <span className="first">{firstPart.trim()}, </span>
                            <span className="second">{secondPart}</span>
                        </>
                    ) : (
                        <span className="first">{rawTitle}</span>
                    )}
                </h1>
                <h3>
                    {t("home.hero.subtitle")}
                </h3>
            </section>
        </div>
    )
}