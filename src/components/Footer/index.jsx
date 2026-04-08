import "./footer.styles.css";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
    const SOCIAL_MEDIA = [
        {
            name: 'GitHub',
            href: 'https://github.com/brtorresdel',
            icon: <IoLogoGithub className="icon"/>
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/brtorresdel/',
            icon: <FaLinkedinIn className="icon"/>
        },
        {
            name: 'Instagram', 
            href: 'https://www.instagram.com/brtorresrod/', 
            icon: <FaInstagram className="icon"/>
        },
        {
            name: '(antigo Twitter)',
            href: 'https://x.com/brtorresrod',
            icon: <FaXTwitter className="icon"/>
        }
    ];

    return (
        <div className="footer-div">
            <div className="policy">
                <h1 className="title">leagueinfo.gg</h1>
                <p>leagueinfo.gg was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.</p>
            </div>
            <div className="dev">
                <h3>Desenvolvido com ❤️ e muito ☕ por Bruno Torres </h3>
                <div className="social-media-icons">
                    {
                        SOCIAL_MEDIA.map((soc, index) => {
                            return <a key={index} href={soc.href}>{soc.icon}</a>
                        })
                    }
                </div>
            </div>
        </div>
    )
}