import "./galeria.css"
import AereaAmenidades from "../../assets/AereaAmenidades.jpg"
import SalonEventos from "../../assets/SalonEventos.jpg"
import piscina from "../../assets/piscina.jpg"
import SalonEventosIn from "../../assets/SalonEventosIn.jpg"
import senderos from "../../assets/senderos.jpg"
import quincho from "../../assets/quincho.jpg"
import canchaMultiuso from "../../assets/canchaMultiuso.jpg"
import gym from "../../assets/gym.jpg"
const Galeria = () => {
  return (
        <section className="galeria">
            <h2>Galería</h2>
            <div className="grid">
                <img src={AereaAmenidades} alt="Cancha de fútbol" />
                <img src={SalonEventos} alt="Gimnasio" />
                <img src={piscina} alt="Área social" />
                <img src={SalonEventosIn} alt="Comedor" />
                <img src={senderos} alt="Cancha de fútbol 2" />
                <img src={quincho} alt="Área de parrilla" />
                <img src={canchaMultiuso} alt="Cancha de fútbol 2" />
                <img src={gym} alt="Área de parrilla" />
            </div>
        </section>
  )
}
export default Galeria