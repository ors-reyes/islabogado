import "./homeAmenities.css"
import homeAmenaties from "../../assets/home-amenaties.jpg"
import HomeIconAmenities from "../HomeIconAmenities/HomeIconAmenities"
import HomeVideo from "../../assets/Isla_Bogado.mp4"
const HomeAmenities = () => {
  return (
    <div>
        <div className="homeAmenities">
            <h2>Amenities</h2>
            <p>Todo lo que necesitás para una vida cómoda y segura, dentro del barrio.</p>
            <HomeIconAmenities/>
            <img src={homeAmenaties} alt="Amenities"/>
        </div>
        <ul className="homeAmenities">
            <h2>Otras comodidades incluidas</h2>
            <li>
                - Planta de tratamiento de aguas residuales
            </li>
            <li>
                - Sistema independiente de agua mediante pozo artesiano
            </li>
            <li>
                - Estacionamientos para visitas
            </li>
        </ul>
        <video className="homeVideo homeAmenities" src={HomeVideo} 
            controls 
            muted 
        />
    </div>
  )
}
export default HomeAmenities