import { PiSecurityCameraFill, PiCourtBasketballFill  } from "react-icons/pi";
import { SiBlockbench } from "react-icons/si";
import { FaSwimmingPool } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { GiTennisCourt, GiBarbecue  } from "react-icons/gi";
import { FaMartiniGlassCitrus } from "react-icons/fa6";
import "./HomeIconAmenities.css"
const HomeIconAmenities = () => {
  return (
    <div className="homeIconAmenities">
        <div className="cardIcon">
            <div className="iconAme">
                <PiSecurityCameraFill  size={25}/>
            </div>
            <p>Vigilancia 24 hs</p>
        </div>
        <div className="cardIcon">
            <div className="iconAme">
                <SiBlockbench  size={25}/>
            </div>
            <p>Parques</p>
        </div>
        <div className="cardIcon">
            <div className="iconAme">
                <FaSwimmingPool  size={25}/>
            </div>
            <p>Piscina con deck</p>
        </div>
        <div className="cardIcon">
            <div className="iconAme">
                <CgGym  size={25}/>
            </div>
            <p>Gimnasio</p>
        </div>
        <div className="cardIcon">
            <div className="iconAme">
                <PiCourtBasketballFill   size={25}/>
            </div>
            <p>Cancha multiuso</p>
        </div>
        <div className="cardIcon">
            <div className="iconAme">
                <GiTennisCourt   size={25}/>
            </div>
            <p>Cancha de padel</p>
        </div>
        <div className="cardIcon">
            <div className="iconAme">
                <GiBarbecue    size={25}/>
            </div>
            <p>3 Quinchos</p>
        </div>
        <div className="cardIcon">
            <div className="iconAme">
                <FaMartiniGlassCitrus    size={25}/>
            </div>
            <p>Salón de eventos</p>
        </div>
    </div>
  )
}
export default HomeIconAmenities