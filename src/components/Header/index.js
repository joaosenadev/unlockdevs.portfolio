import { Link, useLocation } from "react-router-dom"
import "./header.css"
// Assets
import Logo from "../../assets/logo_purple.svg"

// Icons
import { BsMoonFill as Moon } from "react-icons/bs"

export default function Header() {

    const location = useLocation()
    const setActive = {
        projects: location.pathname === "/projects" ? "active" : "",
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
                <li><Link to="/projects" className={setActive.projects}>Projects</Link></li>
                <li><Link to="/about-us" className={setActive.aboutUs}>About Us</Link></li>
                <li><Link to="/community" className={setActive.community}>Community</Link></li>
            </ul>
         </nav>
        
        <section className="contact-and-theme">
            <Link className="btn contact">Contact</Link>

            <button className="theme-mode">
                <Moon size={20} color="black"/>
            </button>
        </section>
    </div>
  )
}
