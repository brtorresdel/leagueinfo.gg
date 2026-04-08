import './App.css'
import { useEffect, useState } from 'react';
import { ChampInfo } from './pages/ChampInfo';
import { LoLService } from './services/LeagueofLegendsService/index';
import { Loading } from './components/Loading';
import { Home } from './pages/Home';

function App() {

  const [champion, setChampion] = useState(null);

  useEffect(() =>  {

    const getChampionInfo = async (champName) => {
      const championInfo = await LoLService.getChampion(champName, "pt_BR");
      console.log(championInfo);

      setChampion(championInfo);
    }

    getChampionInfo("Fiddlesticks");

  }, []);

  if (!champion) return <Loading />

  return (
    <>
      <ChampInfo champInfo={champion} />
    </>
  )
}

export default App
