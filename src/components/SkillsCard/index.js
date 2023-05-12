import "./skillsCard.css"

export default function Skills() {
  return (
    <div className="skills-box">
        <div className="skills-card over">    
            <h1>Mobile Development</h1>
            <p>{exempleTxt}</p>
        </div>

        <div className="skills-card central">    
            <h1>Web Development</h1>
            <p>{exempleTxt}</p>
        </div>

        <div className="skills-card over">    
            <h1>Games Development</h1>
            <p>{exempleTxt}</p>
        </div>
    </div>
  )
}


const exempleTxt = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyindustry's standard dummy text ever since the 1500s, when an unknown printer took a galleyindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley
`