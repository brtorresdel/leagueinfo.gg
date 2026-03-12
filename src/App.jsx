import { useEffect, useState } from 'react';
import './App.css'
import { ChampInfo } from './pages/ChampInfo'
import { LoLService } from './services/LeagueofLegendsService/index';

function App() {

  const [champion, setChampion] = useState(null);

  useEffect(() =>  {

    const championInfo = LoLService.getChampion("Katarina", "pt_BR");

    console.log(championInfo);

  }, [champion, setChampion])

  return (
    <>
      <ChampInfo champName={"Katarina"} />
    </>
  )
}

export default App
