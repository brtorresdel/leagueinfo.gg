import { useState } from "react";
import { HomeFilters } from "../../components/HomeFilters";
import { HomeHero } from "../../components/HomeHero";

export function Home () {
    const [nameFilter, setNameFilter] = useState('');
    const [classFilter, setClassFilter] = useState([]);

    return (
        <>
            <HomeHero />
            <HomeFilters 
            nameFilter={nameFilter} 
            classFilter={classFilter} 
            setNameFilter={setNameFilter}
            setClassFilter={setClassFilter}
            />
        </>
    )
}