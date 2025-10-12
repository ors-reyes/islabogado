import "./home.css"
const Home = () => {
  return (
    <section>
      <div className="hero">
        <div className="hero-Text">
          <p>Un desarrollo residencial premium en Luque: seguridad, diseño y amenities pensados para una vida de confort.</p>
          <div className="hero-button">
            <button className="gold">Ver terrenos disponibles</button>
            <button className="blue">Ver Ubicación</button>
          </div>
        </div>
      </div>
      <div className="relleno"></div>
    </section>
  )
}
export default Home