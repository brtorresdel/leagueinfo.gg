import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from '../Layout';
import { Home } from '../pages/Home';
import { ChampInfo } from '../pages/ChampInfo';
import { LanguageProvider } from '../components/Context/LanguageContext';


export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <LanguageProvider>
                    <Routes>

                        <Route path='/' element={<Layout />}>
                            <Route path='' element={<Home />} />
                            <Route path='home' element={<Home />} />
                            <Route path='champion/:champId' element={<ChampInfo />} />
                        </Route>

                    </Routes>
                </LanguageProvider>
            </BrowserRouter>
        </>
    )
}