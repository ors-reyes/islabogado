import { MdLocalHospital } from "react-icons/md";
import { FaGasPump, FaHospitalSymbol   } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiSchoolBag  } from "react-icons/gi";
import { LiaSchoolSolid } from "react-icons/lia";
import "./CorazonLuque.css"
const CorazonLuque = () => {
  return (
    <div className="equilibrio media1024">
      <div className="equilibrio-text">
        <h2>En el corazón de Luque</h2>
        <p>
          Barrio Cerrado Isla Bogado se encuentra en la ciudad de Luque, una
          zona de rápido crecimiento y gran proyección. Su ubicación ofrece el
          equilibrio perfecto entre tranquilidad y accesibilidad, permitiendo
          disfrutar de un entorno residencial seguro y natural, sin alejarse de
          los principales puntos de conexión.
        </p>
        {/* <p>
          Un entorno residencial seguro y natural, sin alejarse de los
          principales puntos de conexión.
        </p> */}
      </div>
      <div className="equilibrio-card">
        <h2>Todo a tu alcance</h2>
        <div className="homeIconAmenities">
          <div className="cardIcon">
            <div className="iconAme">
              <MdLocalHospital size={25} />
            </div>
            <p>Farmacias</p>
          </div>
          <div className="cardIcon">
            <div className="iconAme">
              <FaGasPump  size={25} />
            </div>
            <p>Estación de servicio</p>
          </div>
          <div className="cardIcon">
            <div className="iconAme">
              <FaCartShopping size={25} />
            </div>
            <p>Supermercados</p>
          </div>
          <div className="cardIcon">
            <div className="iconAme">
              <GiSchoolBag size={25} />
            </div>
            <p>Escuelas</p>
          </div>
          <div className="cardIcon">
            <div className="iconAme">
              <LiaSchoolSolid size={25} />
            </div>
            <p>Colegios</p>
          </div>
          <div className="cardIcon">
            <div className="iconAme">
              <FaHospitalSymbol size={25} />
            </div>
            <p>Unidad de salud</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CorazonLuque;
