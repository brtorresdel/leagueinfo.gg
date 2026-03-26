import { HomeFilters } from "../../components/HomeFilters";
import { HomeHero } from "../../components/HomeHero";

export function Home () {
    return (
        <>
            <HomeHero />
            <HomeFilters nameFilter={''} classFilter={[]} />
        </>
    )
}