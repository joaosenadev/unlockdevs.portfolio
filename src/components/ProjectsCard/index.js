import "./projectsCard.css"

import { HiOutlinePhoto as Photo } from "react-icons/hi2"

export default function Projects() {
  return (
    <div className="projects-card">
      {/* Image here */}
      <div className="img-card">
        <Photo size={100} color="black"/>
      </div>
    </div>
  )
}
