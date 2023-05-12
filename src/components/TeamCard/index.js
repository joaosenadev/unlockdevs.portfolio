import "./teamCard.css"

export default function Team({ title }) {
  return (
    <div className="card">
      <div className="image"></div> {/* Imagem aqui */}

      <div>
        <h1 className="card-title">{title}</h1>
        <span>Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum</span>
      </div>

      <button className="view-more-two">VIEW MORE</button>
    </div>
  )
}
