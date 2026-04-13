import "./footer.styles.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslations } from './../Hooks/useTranslations';

export function Footer() {
    const { t } = useTranslations();

    const dev = t("footer.dev").split("☕");

    const SOCIAL_MEDIA = [
        {
            name: 'GitHub',
            href: 'https://github.com/brtorresdel',
            icon: <IoLogoGithub className="icon"/>,
            iconAlt: "GitHub icon",
            ariaLabel: "Link to developer's GitHub"
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/brtorresdel/',
            icon: <FaLinkedinIn className="icon"/>,
            iconAlt: "LinkedIn icon",
            ariaLabel: "Link to developer's LinkedIn"
        },
        {
            name: 'Instagram', 
            href: 'https://www.instagram.com/brtorresrod/', 
            icon: <FaInstagram className="icon"/>,
            iconAlt: "Instagram icon",
            ariaLabel: "Link to developer's Instagram"
        },
        {
            name: t("socialMedia.twitter"),
            href: 'https://x.com/brtorresrod',
            icon: <FaXTwitter className="icon"/>,
            iconAlt: "X icon",
            ariaLabel: "Link to developer's X"
        }
    ];

    return (
        <div className="footer-div">
            <div className="policy">
                <h1 className="title">leagueinfo.gg</h1>
                <p>{t("footer.policy")}</p>
            </div>
            <div className="dev">
                <h3>{dev[0]}☕ <br className="quebra"/> {dev[1]} </h3>
                <div className="social-media-icons">
                    {
                        SOCIAL_MEDIA.map((soc, index) => {
                            return <a 
                            key={index} 
                            href={soc.href} 
                            target="_blank" 
                            rel="noopener noreferrer">{soc.icon}
                            aria-label={soc.ariaLabel}
                            alt={soc.iconAlt}</a>
                        })
                    }
                </div>
            </div>
        </div>
    )
}