import { useState } from "react";
import { TiThMenu } from 'react-icons/ti';
import { FiHome } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaCode } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./headermenu.styles.css";
import { useTranslations } from './../Hooks/useTranslations';
import { useNavigate } from "react-router";

export function HeaderMenu() {

    const navigate = useNavigate();

    const { t } = useTranslations();

    const SOCIAL_MEDIA = [
        {
            name: 'GitHub',
            href: 'https://github.com/brtorresdel',
            icon: <IoLogoGithub />
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/brtorresdel/',
            icon: <FaLinkedinIn />
        },
        {
            name: 'Instagram', 
            href: 'https://www.instagram.com/brtorresrod/', 
            icon: <FaInstagram />
        },
        {
            name: t('socialMedia.twitter'),
            href: 'https://x.com/brtorresrod',
            icon: <FaXTwitter />
        }
    ]
        
    const [menuMobileView, setMenuMobileView] = useState(false);
    const [socialMediaView, setSocialMediaView] = useState(false);

    const handleSocialMediaView = () => {
        setSocialMediaView(!socialMediaView);
    };

    const handleMenuMobileView = () => {
        setMenuMobileView(!menuMobileView);
    }

    const handleHomeClick = () => navigate('/home');


    return (<div className="menu">
                <div className="menu-mobile">
                    <button
                    onClick={handleMenuMobileView}><TiThMenu className='icon'/></button>
                    <nav className={`menu-mobile-options ${menuMobileView ? 'active' : ''}`}>
                        <button>
                            <IoMdClose 
                            className='icon close'
                            onClick={handleMenuMobileView}/>
                        </button>
                        <button
                        onClick={handleHomeClick}>
                            <FiHome className='icon'/>
                            Início
                        </button>
                        <button 
                        className='about-dev-bnt'
                        onClick={handleSocialMediaView}>
                            <div className="about-dev">
                                <FaCode className='icon'/>
                                Sobre o dev
                            </div>
                            <img src="./src/assets/icons/arrow.svg" className={`arrow ${socialMediaView ? "active" : ""}`} />
                        </button>
                        <nav className={`social-media ${socialMediaView ? "active" : ""}`}>
                            {
                                SOCIAL_MEDIA.map((soc, index) => {
                                    return <SocialMediaLink key={index} href={soc.href} icon={soc.icon} name={soc.name} />
                                })
                            }
                        </nav>
                    </nav>
                </div>
                <nav className="menu-desktop">
                    <button
                    onClick={handleHomeClick}
                    >
                        {t('header.home')}
                    </button>
                    <div className="dev-links">
                        <button
                        onClick={handleSocialMediaView}>{t('header.dev')}</button>
                        <nav className={`social-media ${socialMediaView ? "active" : ""}`}>
                            {
                                SOCIAL_MEDIA.map((soc, index) => {
                                    return <SocialMediaLink key={index} href={soc.href} icon={soc.icon} name={soc.name} />
                                })
                            }
                        </nav>
                    </div>
                </nav>
            </div>)
}

function SocialMediaLink ({href, icon, name}) {
    return <a href={href}>
        {icon}
        {name}
    </a>
}