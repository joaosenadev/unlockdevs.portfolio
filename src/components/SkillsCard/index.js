import "./skillsCard.css"
import { trad } from "../Header"

export default function Skills() {
  return (
    <div className="skills-box">
        <div className="skills-card over">    
            <h1>{trad("skillsCard.mobDev")}</h1>
            <p>{exempleTxt}</p>
        </div>

        <div className="skills-card central">    
            <h1>{trad("skillsCard.webDev")}</h1>
            <p>{exempleTxt}</p>
        </div>

        <div className="skills-card over">    
            <h1>{trad("skillsCard.gameDev")}</h1>
            <p>{exempleTxt}</p>
        </div>
    </div>
  )
}


const exempleTxt = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyindustry's standard dummy text ever since the 1500s, when an unknown printer took a galleyindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley
`