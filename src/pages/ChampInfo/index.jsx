import { ChampHabilities } from "../../components/ChampHabilities";
import { ChampHero } from "../../components/ChampHero";
import { ChampSkins } from "../../components/ChampSkins";
import { ChampTips } from "../../components/ChampTips";
import { Loading } from "../../components/Loading";
import { ChampDescription } from './../../components/ChampDescription/index';

export function ChampInfo({champInfo}) {
    return (
        <>
            <ChampHero champInfo={champInfo} />
            <ChampDescription description={champInfo.lore} />
            <ChampTips allyTips={champInfo.allytips} enemyTips={champInfo.enemytips} />
            <ChampHabilities habilities={champInfo.habilities} />
            <ChampSkins skins={champInfo.skins} champName={champInfo.name} />
        </>
    )
}