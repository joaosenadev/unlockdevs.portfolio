import { Link, useLocation } from "react-router-dom"
import "./header.css"
// Assets
import Logo from "../../assets/logo_purple.svg"

// Icons
import { BsMoonFill as Moon } from "react-icons/bs"

export default function Header() {

    const location = useLocation()
    const setActive = {
        projects: location.pathname === "/" ? "active" : "",
        aboutUs: location.pathname === "/about-us" ? "active" : "",
        community: location.pathname === "/community" ? "active" : "",

    }


  return (
    <div className="header-container">
        <Link to="/">
            <img className="logo-image" src={Logo} alt="LogoIcon" />
        </Link>

         <nav className="navbar">
            <ul>
                <li><Link className={setActive.projects}>Projects</Link></li>
                <li><Link className={setActive.aboutUs}>About Us</Link></li>
                <li><Link className={setActive.community}>Community</Link></li>
            </ul>
         </nav>
        
        <section className="contact-and-theme">
            <Link className="contact-btn">Contact</Link>

            <button className="theme-mode">
                <Moon size={20} color="black"/>
            </button>
        </section>
    </div>
  )
}
