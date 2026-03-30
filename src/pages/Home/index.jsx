import { useEffect, useState } from "react";
import { HomeFilters } from "../../components/HomeFilters";
import { HomeHero } from "../../components/HomeHero";
import { HomeChampList } from "../../components/HomeChampList";
import { LoLService } from "../../services/LeagueofLegendsService";

export function Home () {
    const [nameFilter, setNameFilter] = useState('');
    const [classFilter, setClassFilter] = useState([]);
    const [champions, setChampions] = useState([]);
    const [limit, setLimit] = useState(10);
    
    useEffect(() =>  {

        const getChampionsList = async () => {
            const championsList = await LoLService.getChampionsList("pt_BR");
            
            setChampions(championsList);
        }

        getChampionsList();

    }, []);

    return (
        <>
            <HomeHero />
            <HomeFilters 
            nameFilter={nameFilter} 
            classFilter={classFilter} 
            setNameFilter={setNameFilter}
            setClassFilter={setClassFilter}
            />
            <HomeChampList champions={champions} />
        </>
    )
}