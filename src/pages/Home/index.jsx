import { use, useEffect, useState } from "react";
import { HomeFilters } from "../../components/HomeFilters";
import { HomeHero } from "../../components/HomeHero";
import { HomeChampList } from "../../components/HomeChampList";
import { LoLService } from "../../services/LeagueofLegendsService";
import { HomeLimitController } from "../../components/HomeLimitController";

export function Home () {
    const [nameFilter, setNameFilter] = useState('');
    const [classFilter, setClassFilter] = useState([]);
    const [champions, setChampions] = useState([]);
    const [rows, setRows] = useState(4);
    const [limit, setLimit] = useState(9);
    
    useEffect(() =>  {

        const getChampionsList = async () => {
            const championsList = await LoLService.getChampionsList("pt_BR");
            setChampions(championsList);
            console.log(championsList);
        }

        getChampionsList();

    }, []);

    useEffect(() => {
        const updateLimit = () => {
            const width = window.innerWidth;

            if (width >= 1566) {
                setLimit(8 * rows);
            } else if (width >= 765 && width <= 767 || width >= 1365 && width <= 1565) {
                setLimit(7 * rows);
            } else if (width >= 645 && width <= 755 || width == 1023 || width >= 1165 && width <= 1364) {
                setLimit(6 * rows);
            } else if (width >= 534 && width <= 643 || width >= 844 && width <= 1022 || width >= 1024 && width <= 1164) {
                setLimit(5 * rows);
            } else if ((width >= 421 && width <= 533) || (width >= 768 && width <= 843)) {
                setLimit(4 * rows);
             } else if (width <= 420) {
                 setLimit(3 * rows);
             }
            
        }

        updateLimit();
        window.addEventListener('resize', updateLimit);
        return () => window.removeEventListener('resize', updateLimit);
    }, []);

    const handleLimitBtnClick = () => {
        setLimit(prevLimit => prevLimit + 9);
    };

    return (
        <>
            <HomeHero />
            <HomeFilters 
            nameFilter={nameFilter} 
            classFilter={classFilter} 
            setNameFilter={setNameFilter}
            setClassFilter={setClassFilter}
            />
            <HomeChampList championsList={champions} limit={limit} />
            <HomeLimitController onClick={handleLimitBtnClick} />
        </>
    )
}