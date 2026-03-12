import { useEffect, useState } from 'react';
import './App.css'
import { ChampInfo } from './pages/ChampInfo'
import { LoLService } from './services/LeagueofLegendsService/index';

function App() {

  const [champion, setChampion] = useState(null);

  useEffect(() =>  {

    const getChampionInfo = async (champName) => {
      const championInfo = await LoLService.getChampion(champName, "pt_BR");

      setChampion(championInfo);
    }

    getChampionInfo("Katarina");

  }, []);

  if (!champion) return <div>Carregando...</div>

  return (
    <>
      <ChampInfo champInfo={champion} />
    </>
  )
}

export default App
