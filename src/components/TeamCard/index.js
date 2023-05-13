import "./teamCard.css"
import i18n from '../../translate/i18n'

export default function Team({ title }) {

  const trad = i18n.t

  return (
    <div className="card">
      <div className="image"></div> {/* Imagem aqui */}

      <div>
        <h1 className="card-title">{title}</h1>
        <span>Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum</span>
      </div>

      <button className="view-more-two">{trad("main.viewMore")}</button>
    </div>
  )
}
