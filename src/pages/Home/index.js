// Components
import Header, { trad } from '../../components/Header'
import Team from '../../components/TeamCard'
import Skills from '../../components/SkillsCard'
import Projects from '../../components/ProjectsCard'

import SymbolLight from "../../assets/symbol lightpurple.svg"
import SymbolDark from "../../assets/symbol darkpurple.png"
import "./home.css"

// Framer Motion
import { motion } from "framer-motion";

// Icons
import { IoIosArrowDown as Arrow } from "react-icons/io"
import { IoMailOutline as Mail } from "react-icons/io5"
import { FiSend as Send } from "react-icons/fi"
import { FaTiktok as Tiktok } from "react-icons/fa"
import { BsDiscord as Discord, BsGithub as GitHub, BsInstagram as Instagram } from "react-icons/bs"

import { useContext } from 'react'
import { ThemeContext } from '../../components/Theme'


export default function Home() {

  const { theme, toggleTheme } = useContext(ThemeContext)


  //Animations
  const mainAnimFrom = {
    opacity: 0,
    translateY: 50,
  }
  const transition = {
    ease: "easeInOut",
    duration: 1
  }
  const mainAnimTo = {
    opacity: 1,
    translateY: 0
  }

  return (
    <div className="home-container">
      <Header />

      <main>
        <section className="description-container">
          <motion.p
            initial={mainAnimFrom}
            whileInView={mainAnimTo}
            transition={transition}
            className="unlock-phrase">
            {trad("phrase.unlock")} <strong>{trad("phrase.power")}</strong> {trad("phrase.tech")} <strong>{trad("phrase.code")}</strong>
          </motion.p>

          <motion.button
            initial={{ scale: .8, opacity: 0 }}
            whileInView={{scale: 1 , opacity: 1 }}
            transition={{ duration: .5 }}
            className="btn view-more">
            {trad("main.viewMore")}
          </motion.button>

          <motion.div
            initial={mainAnimFrom}
            whileInView={mainAnimTo}
            transition={transition}
            className="unlock-tech">
            <ul>
              <li>Front-End</li>
              <li>Back-End</li>
              <li>Mobile</li>
              <li>Games</li>
            </ul>
          </motion.div>
        </section>

        <motion.section
          initial={mainAnimFrom}
          whileInView={mainAnimTo}
          transition={transition}
          className="unlock-symbol">

          <img src={theme === "light" ? SymbolLight : SymbolDark} alt="Unlock Symbol" />
        </motion.section>
      </main>

      <div className="scroll-down">
        <Arrow size={40} />
      </div>

      <motion.section
        initial={mainAnimFrom}
        whileInView={mainAnimTo}
        transition={transition}
        className="teams-container">

        <motion.h1 className="title skills"
          initial={{ letterSpacing: "0" }}
          whileInView={{ letterSpacing: "0.6em" }}
          transition={{duration: 1, ease: "easeOut"}}>{trad("main.teams")}
        </motion.h1>

        <div className="cards-content">
          <Team title="Unlock Devs" />
          <Team title="Unlock Devs" />
          <Team title="Unlock Devs" />
          <Team title="Unlock Devs" />
          <Team title="Unlock Devs" />
          <Team title="Unlock Devs" />
        </div>
      </motion.section>

      <line />

      <motion.section
        initial={mainAnimFrom}
        whileInView={mainAnimTo}
        transition={transition} className="skills-container">

        <motion.h1 className="title skills"
          initial={{ letterSpacing: "0" }}
          whileInView={{ letterSpacing: "0.6em" }}
          transition={{duration: 1, ease: "easeOut"}}>{trad("main.skills")}
        </motion.h1>

        <Skills />
      </motion.section>

      <line />

      <motion.section
        initial={mainAnimFrom}
        whileInView={mainAnimTo}
        transition={transition}
        className="projects-container">

        <motion.h1
          initial={{ letterSpacing: "0" }}
          whileInView={{ letterSpacing: "0.6em" }}
          transition={{duration: 1, ease: "easeOut"}}
          className="title">
          {trad("main.projects")}
        </motion.h1>

        <div className="cards-content projects">
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
          <Projects />
        </div>

        <button className="btn-2 view-more">{trad("main.viewMore")}</button>
      </motion.section>

      <line />

      <motion.section
        initial={mainAnimFrom}
        whileInView={mainAnimTo}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="footer-contact">

        <Mail className="footer-icon mail" size={200} />
        <Send className="footer-icon send" size={200} />

        <div>
          <span>{trad("main.contactToMore")}</span>
          <button className="btn-2 contactUs">{trad("main.contactUs")}</button>
        </div>

      </motion.section>

      <section className="footer">
        <div className="footer-message">
          <h1>"{trad("main.devCommunity")}"</h1>
          <p>©2023 Unlock Developer's</p>
        </div>

        <div className="social-midia">
          <a href="https://discord.gg/ZmwBnzuvhV" target="_blank" title="Discord">
            <Discord size={40} />
          </a>
          <a href="https://github.com/unlockdevs" target="_blank" title="GitHub">
            <GitHub size={40} />
          </a>
          <a href="https://www.tiktok.com/@unlockdevelopers" target="_blank" title="TikTok">
            <Tiktok size={40} />
          </a>
          <a href="https://www.instagram.com/unlockdevs/" target="_blank" title="Instagram">
            <Instagram size={40} />
          </a>
        </div>
      </section>
    </div>
  )
}
