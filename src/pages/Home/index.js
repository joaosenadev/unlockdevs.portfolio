// Components
import Header from '../../components/Header'
import Team from '../../components/TeamCard'
import Skills from '../../components/SkillsCard'
import Projects from '../../components/ProjectsCard'

import Symbol from "../../assets/symbol lightpurple.svg"
import "./home.css"

// Icons
import { IoIosArrowDown as Arrow } from "react-icons/io"
import { IoMailOutline as Mail } from "react-icons/io5"
import { FiSend } from "react-icons/fi"
import { FaTiktok as Tiktok } from "react-icons/fa"
import { BsDiscord as Discord, BsGithub as GitHub, BsInstagram as Instagram} from "react-icons/bs"


export default function Home() {
  return (
    <div className="home-container">
        <Header/>

        <main>
          <section className="description-container">
            <p className="unlock-phrase">
                Unlocking the <strong>power</strong> of technology with every line of <strong>code.</strong>
            </p>

            <button className="btn view-more">VIEW MORE</button>

            <div className="unlock-tech">
              <ul>
                <li>Front-End</li>
                <li>Back-End</li>
                <li>Mobile</li>
                <li>Games</li>
              </ul>
            </div>
          </section>

          <section className="unlock-symbol">
            <img src={Symbol} alt="Unlock Symbol"/>
          </section>
        </main>

        <div className="scroll-down"
        >
          <Arrow size={40}/>
        </div>

        <section className="teams-container">
          <h1 className="title skills">TEAMS</h1>
          <div className="cards-content">
            <Team title="Unlock Devs"/>
            <Team title="Unlock Devs"/>
            <Team title="Unlock Devs"/>
            <Team title="Unlock Devs"/>
            <Team title="Unlock Devs"/>
            <Team title="Unlock Devs"/>
          </div>
        </section>

        <line/>

        <section className="skills-container">
          <h1 className="title skills">SKILLS</h1>
          <Skills/>
        </section>

        <line/>

        <section className="projects-container">
          <h1 className="title">PROJECTS</h1>
          <div className="cards-content projects">
            <Projects/>
            <Projects/>
            <Projects/>
            <Projects/>
            <Projects/>
            <Projects/>
          </div>

          <button className="btn-2 view-more">VIEW MORE</button>
        </section>

        <line/>

        <section className="footer-contact">

          <Mail className="footer-icon mail" size={200}/>
          <FiSend className="footer-icon send" size={200}/>

          <div>
            <span>CONTACT US TO KNOW <strong>MORE.</strong></span>
            <button className="btn-2 contactUs">CONTACT US</button>
          </div>

        </section>

        <section className="footer">
          <div className="footer-message">
            <h1>"A developer's community"</h1>
            <p>©2023 Unlock Developer's</p>
          </div>

          <div className="social-midia">
            <a href="#" title="Discord"><Discord size={40}/></a>
            <a href="#" title="GitHub"><GitHub size={40}/></a>
            <a href="#" title="TikTok"><Tiktok size={40}/></a>
            <a href="#" title="Instagram"><Instagram size={40}/></a>
          </div>
        </section>
    </div>
  )
}
