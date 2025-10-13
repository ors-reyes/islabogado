import { useNavigate } from "react-router-dom"
import "./home.css"

const Hero = () => {
    const navigate = useNavigate()
    const handleTerreno =()=>{
        navigate('/terrenos')        
    }
    const handleUbicacion =()=>{
        navigate('/ubicacion')
    }
  return (
    <div className="hero">
        <div className="hero-Text">
          <p>Un desarrollo residencial en Luque que te ofrece seguridad, diseño y amenities pensados para una vida de confort..</p>
          <div className="hero-button">
            <button onClick={handleTerreno} className="gold">Ver terrenos disponibles</button>
            <button onClick={handleUbicacion} className="blue">Ver Ubicación</button>
          </div>
        </div>
        <div className="hero-Text-bottom">
          <p>Farmacia · Estación de servicio · Supermercados · Escuelas y colegio · Unidad de salud</p>
        </div>
      </div>
  )
}
export default Hero