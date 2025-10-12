import "./footer.css"
import { FaWhatsappSquare, FaInstagramSquare, FaFacebookSquare, FaMapMarkedAlt  } from "react-icons/fa";
import cajaMutual from "./cajaFooter.svg"
import logo from "../nav/logoHorizontal.svg"
import { NavLink, useNavigate } from "react-router-dom"
const Footer = () => {
    const navigate = useNavigate()
    const handleContacto =()=>{
        navigate("/contactos")
    }
  return (
    <footer>
        <div className="footerHeader">
            <div className="homeAmenities">
                <h2>Coordiná una visita</h2>
                <p>Coordiná una visita personalizada y descubrí la propuesta urbanística de Isla Bogado.</p>
                <button style={{width:"300px"}} onClick={handleContacto} className="blue">Ver Ubicación</button>
            </div>
        </div>
        <div className="footer">
            <img className="cajaMutual" src={cajaMutual} alt="Caja Mutual Logo" />
            <nav className="navFooter">
                <img className="logoFooter" src={logo} alt="Logo" />
                <h2>Enlaces rápidos</h2>
                <ul>
                    <li><NavLink  to={"/"} >Inicio</NavLink></li>
                    <li><NavLink  to={"/ubicacion"} >Ubicación</NavLink></li>
                    <li><NavLink  to={"/amenidades"} >Amenidades</NavLink></li>
                    <li><NavLink  to={"/terrenos"} >Terrenos</NavLink></li>
                    <li><NavLink  to={"/contactos"} >Contacto</NavLink></li>
                </ul>
            </nav>
            <div className="redes-Footer">
                <div className="redes">
                    <FaWhatsappSquare  size={30}/>
                    <FaInstagramSquare  size={30}/>
                    <FaFacebookSquare   size={30}/>
                </div>
                <div className="number">
                    <NavLink to={"tel:+595981751986"} >+595 974 522 000</NavLink>
                    <p>ventas@islabogado.com</p>
                </div>
                <FaMapMarkedAlt     size={100}/>
            </div>
        </div>
        <div className="copy">
            <p>Asunción - Paraguay / Mcal. López 5080 c/ RI 2 Ytororó / www.cmcp.py</p>
            <div className="derechos">
                <p>SUJETO A ANÁLISIS CREDITICIO Y CONDICIONES COMERCIALES VIGENTES</p>
                <p>© 2023 Barrio Cerrado Isla Bogado. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
  )
}
export default Footer