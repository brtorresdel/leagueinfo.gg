import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { ChampHabilities } from "../../components/ChampHabilities";
import { ChampHero } from "../../components/ChampHero";
import { ChampSkins } from "../../components/ChampSkins";
import { ChampTips } from "../../components/ChampTips";
import { ChampDescription } from './../../components/ChampDescription/index';
import { LoLService } from "../../services/LeagueofLegendsService";
import { Loading } from "../../components/Loading";


export function ChampInfo() {

    const [champion, setChampion] = useState(null);
    const {champId} = useParams();
    const navigate = useNavigate();
    
    useEffect(() =>  {
    
        const getChampionInfo = async (champId) => {
            console.log(champId);

            const championInfo = await LoLService.getChampion(champId, "en_US");
        
            setChampion(championInfo);
        }
        
        getChampionInfo(champId);
    }, [champId]);

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