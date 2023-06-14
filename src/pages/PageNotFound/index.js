import "./pageNotFound.css"
import { FaRobot } from "react-icons/fa"
import { Link } from "react-router-dom"
import { trad } from "../../translate/i18n"

export default function PageNotFound() {
  return (
    <div className="pgnotfound-container">
      <FaRobot size={100} />
      <span>{trad("error.pageNotFound")}</span>

      <Link to="/" className="back-home">{trad("error.backToHome")}</Link>
    </div>
  )
}
