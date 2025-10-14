import { PiSecurityCameraFill, PiCourtBasketballFill } from "react-icons/pi";
import { SiBlockbench } from "react-icons/si";
import { FaSwimmingPool } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { GiTennisCourt, GiBarbecue } from "react-icons/gi";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import "./iconos.css"
const Iconos = () => {
  return (
    <div>
      <div className="iconAmenities">

        <div className="cardIconAme">
          <div className="conteIcon">
            <div className="iconAme2">
              <PiSecurityCameraFill size={25} />
            </div>
            <p>Vigilancia 24 hs</p>
          </div>
          <div className="iconDescrip">
            <p>Sistema de seguridad y control de accesos permanente para mayor tranquilidad.</p>
          </div>
        </div>
        <div className="cardIconAme">
          <div className="conteIcon">
            <div className="iconAme2">
              <SiBlockbench size={25} />
            </div>
            <p>Parques</p>
          </div>
          <div className="iconDescrip">
            <p>Amplios espacios verdes diseñados para actividades al aire libre y recreación.</p>
          </div>
        </div>
        <div className="cardIconAme">
          <div className="conteIcon">
            <div className="iconAme2">
              <FaSwimmingPool size={25} />
            </div>
            <p>Piscina con deck</p>
          </div>
          <div className="iconDescrip">
            <p>Piscina con área de deck para descanso y actividades sociales.</p>
          </div>
        </div>
        <div className="cardIconAme">
          <div className="conteIcon">
            <div className="iconAme2">
              <FaMartiniGlassCitrus size={25} />
            </div>
            <p>Salón de eventos</p>
          </div>
          <div className="iconDescrip">
            <p>Espacio elegante y versátil para celebraciones y reuniones.</p>
          </div>
        </div>
        <div className="cardIconAme">
          <div className="conteIcon">
            <div className="iconAme2">
              <GiBarbecue size={25} />
            </div>
            <p>3 Quinchos</p>
          </div>
          <div className="iconDescrip">
            <p>Lugares equipados para asados y reuniones.</p>
          </div>
        </div>
        <div className="cardIconAme">
          <div className="conteIcon">
            <div className="iconAme2">
              <PiCourtBasketballFill size={25} />
            </div>
            <p>Cancha multiuso</p>
          </div>
          <div className="iconDescrip">
            <p>Infraestructura para diversas disciplinas deportivas.</p>
          </div>
        </div>        
        <div className="cardIconAme">
          <div className="conteIcon">
            <div className="iconAme2">
              <GiTennisCourt size={25} />
            </div>
            <p>Cancha de pádel</p>
          </div>
          <div className="iconDescrip">
            <p>Infraestructura exclusiva para disfrutar con amigos y vecinos.</p>
          </div>
        </div>
        <div className="cardIconAme">
          <div className="conteIcon">
            <div className="iconAme2">
              <CgGym size={25} />
            </div>
            <p>Gimnasio</p>
          </div>
          <div className="iconDescrip">
            <p>Instalaciones modernas para mantener un estilo de vida saludable sin salir del barrio.</p>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Iconos;
