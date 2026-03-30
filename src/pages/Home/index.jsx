import { useEffect, useState } from "react";
import { HomeFilters } from "../../components/HomeFilters";
import { HomeHero } from "../../components/HomeHero";
import { HomeChampList } from "../../components/HomeChampList";
import { LoLService } from "../../services/LeagueofLegendsService";

export function Home () {
    const [nameFilter, setNameFilter] = useState('');
    const [classFilter, setClassFilter] = useState([]);
    const [champions, setChampions] = useState([]);
    
    useEffect(() =>  {

        const getChampionsList = async () => {
            if (!localStorage.getItem('championsList')) {
                const championsList = await LoLService.getChampionsList("pt_BR");
                localStorage.setItem('championsList', JSON.stringify(championsList));
            }

            const championsList = JSON.parse(localStorage.getItem('championsList'));
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