import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ChampHabilities } from "../../components/ChampHabilities";
import { ChampHero } from "../../components/ChampHero";
import { ChampSkins } from "../../components/ChampSkins";
import { ChampTips } from "../../components/ChampTips";
import { ChampDescription } from './../../components/ChampDescription/index';
import { LoLService } from "../../services/LeagueofLegendsService";
import { Loading } from "../../components/Loading";
import { useTranslations } from "../../components/Hooks/useTranslations";
import { SEO } from "../../components/SEO";
import { getOptimizedImg } from "../../utils/imgOptimizations";


export function ChampInfo() {

    const [ champion, setChampion ] = useState(null);
    const [heroLoading, setHeroLoading] = useState(false);
    const { champId } = useParams();
    const { language } = useTranslations();
    
    useEffect(() =>  {
    
        const getChampionInfo = async (champId) => {
            setHeroLoading(false);
            const championInfo = await LoLService.getChampion(champId, language);

            const img = new Image();

            img.src = getOptimizedImg(championInfo.skins[0].img);
            img.onload = () => {
                setChampion(championInfo);
                setHeroLoading(true);
            }
        }
        
        getChampionInfo(champId);
    }, [champId, language]);

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    if (!champion || !heroLoading) return <div className="loading-div">
        <Loading />
    </div>

    const handleLoading = (loaded) => setHeroLoading(loaded);

    return (
        <>
            <SEO 
            title={champion.name}
            description={`Aprenda como jogar com ${champion.name}, ${champion.title}. Dicas de aliados e inimigos.`}
            image={champion.skins[0].img}
            type="article"/>
            <ChampHero champInfo={champion} handleLoading={handleLoading} />
            <ChampDescription description={champion.lore} />
            <ChampTips allyTips={champion.allytips} enemyTips={champion.enemytips} />
            <ChampHabilities habilities={champion.habilities} />
            <ChampSkins skins={champion.skins} champName={champion.name} />
        </>
    )
}