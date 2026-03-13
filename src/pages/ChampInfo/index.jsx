import { ChampHero } from "../../components/ChampHero";
import { ChampTips } from "../../components/ChampTips";
import { ChampDescription } from './../../components/ChampDescription/index';

export function ChampInfo({champInfo}) {
    return (
        <>
            <ChampHero champInfo={champInfo} />
            <ChampDescription description={champInfo.lore} />
            <ChampTips allyTips={champInfo.allytips} enemyTips={champInfo.enemytips} />
        </>
    )
}