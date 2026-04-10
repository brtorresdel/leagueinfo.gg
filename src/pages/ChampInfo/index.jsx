import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { ChampHabilities } from "../../components/ChampHabilities";
import { ChampHero } from "../../components/ChampHero";
import { ChampSkins } from "../../components/ChampSkins";
import { ChampTips } from "../../components/ChampTips";
import { ChampDescription } from './../../components/ChampDescription/index';
import { LoLService } from "../../services/LeagueofLegendsService";
import { Loading } from "../../components/Loading";
import { useTranslations } from "../../components/Hooks/useTranslations";


export function ChampInfo() {

    const [ champion, setChampion ] = useState(null);
    const { champId } = useParams();
    const { language } = useTranslations();
    
    useEffect(() =>  {
    
        const getChampionInfo = async (champId) => {
            console.log(champId);

            const championInfo = await LoLService.getChampion(champId, language);
        
            setChampion(championInfo);
        }
        
        getChampionInfo(champId);
    }, [champId, language]);

    if (!champion) return <Loading />

    return (
        <>
            <ChampHero champInfo={champion} />
            <ChampDescription description={champion.lore} />
            <ChampTips allyTips={champion.allytips} enemyTips={champion.enemytips} />
            <ChampHabilities habilities={champion.habilities} />
            <ChampSkins skins={champion.skins} champName={champion.name} />
        </>
    )
}