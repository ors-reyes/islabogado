import "./homeAmenities.css"
import homeAmenaties from "../../assets/home-amenaties.jpg"
const HomeAmenities = () => {
  return (
    <div>
        <div className="homeAmenities">
            <h2>Amenities</h2>
            <p>Todo lo que necesitás para una vida cómoda y segura, dentro del barrio.</p>
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
    </div>
  )
}
export default HomeAmenities