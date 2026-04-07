import { useEffect, useState } from 'react';
import './header.styles.css';
import {HeaderMenu} from '../HeaderMenu';


export function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

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
                <h1>leagueinfo.gg</h1>
            </div>
            <div className="languages">
                <button>EN</button>
            </div>
        </header>
    )
}