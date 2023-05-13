import { Link, useLocation } from "react-router-dom"
import "./header.css"

// Assets
import Logo from "../../assets/logo_purple.svg"
import FlagBR from "../../assets/brazil.png"
import FlagUSA from "../../assets/usa.png"

// Icons
import { BsMoonFill as Moon, BsGlobe as Globe } from "react-icons/bs"
import { FiSun as Sun } from "react-icons/fi"

import { useContext, useState } from "react"
import { ThemeContext } from "../Theme"
import { Modal } from "../Modal"

// Translate
import i18n from '../../translate/i18n'
import { motion } from "framer-motion"
export const { t: trad } = i18n

export default function Header() {

    const [abrirModal, setAbrirModal] = useState(false)

    const location = useLocation()
    const setActive = {
        projects: location.pathname === "/projects" ? "active" : "",
        aboutUs: location.pathname === "/about-us" ? "active" : "",
        community: location.pathname === "/community" ? "active" : "",
    }

    const { theme, toggleTheme } = useContext(ThemeContext)
    const handleToggleTheme = () => {
        toggleTheme()
    }

    // Language
    const I18N_STORAGE_KEY = "i18nextLng"
    const [languages] = useState(localStorage.getItem(I18N_STORAGE_KEY))

    const handleSelectLanguage = (language) => {
        localStorage.setItem(I18N_STORAGE_KEY, language)
        setAbrirModal(false)

        window.location.reload()
    }

    //Animations
    const mainAnimFrom = {
        opacity: 0,
        translateY: 32
    }
    const mainAnimTo = {
        opacity: 1,
        translateY: 0
    }
    const transition = {
        duration: 1,
        ease: "easeOut"
    }

    return (
        <>
            <div className="header-container">
                <Link to="/">
                    <motion.img
                        initial={{ translateX: -50, opacity: 0 }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        transition={{ duration: .5, ease: "easeOut" }}
                        className="logo-image" src={Logo} alt="LogoIcon" />
                </Link>

                <motion.nav
                    initial={mainAnimFrom}
                    whileInView={mainAnimTo}
                    transition={transition}
                    className="navbar">
                    <ul>
                        <li><Link to="/projects" className={setActive.projects}>{trad("navbar.projects")}</Link></li>
                        <li><Link to="/about-us" className={setActive.aboutUs}>{trad("navbar.aboutUs")}</Link></li>
                        <li><Link to="/community" className={setActive.community}>{trad("navbar.community")}</Link></li>
                    </ul>
                </motion.nav>

                <motion.section
                    initial={{ translateY: 20, opacity: 0 }}
                    whileInView={{translateY: 0, opacity: 1 }}
                    transition={transition} className="contact-and-theme">
                    <Link className="btn contact">{trad("navbar.contact")}</Link>

                    <button onClick={handleToggleTheme} className="theme-mode">

                        {theme === "dark" ? (
                            <Sun size={25} color="white" />
                        ) : (<Moon size={20} color="black" />)}
                        <span className="theme-name">{theme === "light" ? trad("navbar.dark") : trad("navbar.light")}</span>
                    </button>

                    <button onClick={() => setAbrirModal(true)} className="open-select-lang">
                        <Globe size={35} />
                    </button>
                </motion.section>
            </div>

            <Modal modalTitle={trad("modalLang.title")} setModalOpen={() => setAbrirModal(!abrirModal)} isOpen={abrirModal}>
                <div className="language-content">
                    <span onClick={() => handleSelectLanguage("pt-BR")}>
                        <img src={FlagBR} width={40} />
                        Português
                    </span>

                    <span onClick={() => handleSelectLanguage("en")}>
                        <img src={FlagUSA} width={40} />
                        English
                    </span>
                </div>
            </Modal>
        </>
    )
}

