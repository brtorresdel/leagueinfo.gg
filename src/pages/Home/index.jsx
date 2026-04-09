import { useEffect, useState } from "react";
import { HomeFilters } from "../../components/HomeFilters";
import { HomeHero } from "../../components/HomeHero";
import { HomeChampList } from "../../components/HomeChampList";
import { LoLService } from "../../services/LeagueofLegendsService";
import { HomeLimitController } from "../../components/HomeLimitController";
import { Header } from './../../components/Header/index';
import { Footer } from './../../components/Footer/index';

export function Home () {
    const [nameFilter, setNameFilter] = useState('');
    const [classFilter, setClassFilter] = useState([]);
    const [champions, setChampions] = useState([]);
    const [showLimitBtn, setShowLimitBtn] = useState(true);
    const [rows, setRows] = useState(4);
    const [limit, setLimit] = useState(9);
    const [filteredChampions, setFilteredChampions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() =>  {

        const getChampionsList = async () => {
            if (!localStorage.getItem('championsList')) {
                const championsList = await LoLService.getChampionsList("pt_BR");
                localStorage.setItem('championsList', JSON.stringify(championsList));
            }
            
            const championsList = JSON.parse(localStorage.getItem('championsList'));
            setChampions(championsList);
            setIsLoading(false);
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
    }, [rows, setRows]);
    
    useEffect(() => {
        if (limit >= champions.length || filteredChampions.length <= limit) {
            setShowLimitBtn(false);
        } else {
            setShowLimitBtn(true);
        }
    }, [limit, champions.length, filteredChampions]);

    useEffect(() => {
        if (nameFilter !== '') {
            const filtered = champions.filter(champ => champ.name.toLowerCase().includes(nameFilter.toLowerCase()));
            setFilteredChampions(filtered);
        } else {
            setFilteredChampions(champions);
        }
    }, [nameFilter, champions]);

    useEffect(() => {
        console.log(classFilter);
        if (classFilter.length > 0) {
            const filtered = champions.filter(champ => {
                const champClassesLowerCase = champ.classes.map(c => c.toLowerCase());
                return classFilter.every(filter => champClassesLowerCase.includes(filter.toLowerCase()));
            });
            setFilteredChampions(filtered);
        } else {
            setFilteredChampions(champions);
        }
    }, [classFilter, champions]);


    const handleLimitBtnClick = () => setRows(rows + 4);


    return (
        <>
            <Header />
            <HomeHero />
            <HomeFilters 
            nameFilter={nameFilter} 
            classFilter={classFilter} 
            setNameFilter={setNameFilter}
            setClassFilter={setClassFilter}
            />
            <HomeChampList championsList={filteredChampions} limit={limit} isLoading={isLoading}/>
            <HomeLimitController onClick={handleLimitBtnClick} show={showLimitBtn} />
            <Footer />
        </>
    )
}