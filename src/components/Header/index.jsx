import { useEffect, useState } from 'react';
import './header.styles.css';
import { HeaderMenu } from '../HeaderMenu';
import { LanguagesBtn } from '../LanguagesBtn';
import { useLocation } from 'react-router';


export function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    const { pathname } = useLocation();
    const isChampPage = pathname.startsWith("/champion");    

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            
            <HeaderMenu />

            <div className="title">
                <h1 className={`${!isChampPage ? "scrolled" : ''} ${isScrolled ? 'scrolled' : ''}`}>leagueinfo.gg</h1>
            </div>

            <div className="languages">
                <LanguagesBtn />
            </div>
        </header>
    )
}