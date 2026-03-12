import { ChampHero } from "../../components/ChampHero";
import { ChampDescription } from './../../components/ChampDescription/index';

export function ChampInfo({champInfo}) {
    return (
        <>
            <ChampHero champInfo={champInfo} />
            <ChampDescription description={champInfo.lore} />
        </>
    )
}