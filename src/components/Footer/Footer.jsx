import "./footer.css";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaMapMarkedAlt,
  FaArrowAltCircleUp,
} from "react-icons/fa";
import cajaMutual from "./cajaFooter.svg";
import logo from "../nav/logoHorizontal.svg";
import { NavLink } from "react-router-dom";
// import { NavLink, useNavigate } from "react-router-dom";
const Footer = () => {
//   const navigate = useNavigate();
//   const handleContacto = () => {
//     navigate("/contactos");
//   };
  const handleWhatsAppClick = () => {
    const url =
      "https://wa.me/+595974522000/?text=¡Hola!%20Quiero%20información.";
    window.open(url, "_blank");
  };
  const handleInstagramClick = () => {
    const url = "https://www.instagram.com/islabogadobarriocerrado/";
    window.open(url, "_blank");
  };
  const handleFacebookClick = () => {
    const url = "https://www.facebook.com/profile.php?id=61582009595119";
    window.open(url, "_blank");
  };
  const handleMapsClick = () => {
    const url = "https://maps.app.goo.gl/1s38EbWqY7UYE3Pp8";
    window.open(url, "_blank");
  };
  const gotop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer>
      <div className="footerHeader">
        <div className="homeAmenities">
          <h2>Coordiná una visita</h2>
          <p>
            Coordiná una visita personalizada y descubrí la propuesta
            urbanística de Isla Bogado.
          </p>
          <button
            style={{ width: "300px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
            onClick={handleWhatsAppClick}
            className="blue"
          >
            {/* Ver Ubicación */}
            <FaWhatsappSquare
              className="iconButoom"
              size={30}
              fill="white"
            /> Contactar por WhatsApp
          </button>
        </div>
      </div>
      <div className="footer">
        <img className="cajaMutual" src={cajaMutual} alt="Caja Mutual Logo" />
        <nav className="navFooter">
          <img className="logoFooter" src={logo} alt="Logo" />
          <h2>Enlaces rápidos</h2>
          <ul>
            <li>
              <NavLink to={"/"}>Inicio</NavLink>
            </li>
            <li>
              <NavLink to={"/ubicacion"}>Ubicación</NavLink>
            </li>
            <li>
              <NavLink to={"/amenidades"}>Amenidades</NavLink>
            </li>
            <li>
              <NavLink to={"/terrenos"}>Terrenos</NavLink>
            </li>
            <li>
              <NavLink to={"/contactos"}>Contacto</NavLink>
            </li>
          </ul>
        </nav>
        <div className="redes-Footer">
          <div className="redes">
            <FaWhatsappSquare
              className="iconButoom"
              onClick={handleWhatsAppClick}
              size={30}
              fill="white"
            />
            <FaInstagramSquare
              className="iconButoom"
              onClick={handleInstagramClick}
              size={30}
              fill="white"
            />
            <FaFacebookSquare
              className="iconButoom"
              onClick={handleFacebookClick}
              size={30}
              fill="white"
            />
          </div>
          <div className="number">
            <NavLink to={"tel:+595981751986"}>+595 974 522 000</NavLink>
            <p>ventas@islabogado.com</p>
          </div>
          <FaMapMarkedAlt
            className="iconButoom"
            onClick={handleMapsClick}
            size={100}
            fill="white"
          />
        </div>
      </div>
      <div className="copy">
        <p>
          Asunción - Paraguay / Mcal. López 5080 c/ RI 2 Ytororó / www.cmcp.org.py
        </p>
        <div className="derechos">
          <p>SUJETO A ANÁLISIS CREDITICIO Y CONDICIONES COMERCIALES VIGENTES</p>
          <p>
            © 2023 Barrio Cerrado Isla Bogado. Todos los derechos reservados.
          </p>
        </div>
      </div>
      <div className="goTop" onClick={gotop}>
        <FaArrowAltCircleUp size={30} />
      </div>
    </footer>
  );
};
export default Footer;
