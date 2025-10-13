import { useNavigate } from "react-router-dom"
import "./Equilibrio.css"
const Equilibrio = () => {
    const navigate = useNavigate()
    const handleContacto =()=>{
        navigate('/contactos')
        
    }
  return (
    <div className="equilibrio">
        <div className="equilibrio-text">
            <h2>Un equilibrio perfecto</h2>
            <p>Isla Bogado está ubicado en Luque, una zona de alto crecimiento y proyección. El desarrollo ofrece un balance entre tranquilidad y conectividad, con una infraestructura diseñada para brindar seguridad, sostenibilidad y calidad de vida.</p>
            <p>Seguridad 24 hs · Parques · Piscina · Canchas · Gimnasio</p>
        </div>
        <div className="equilibrio-card">
            <h2>123 Terrenos</h2>
            <p>desde <span style={{fontWeight:"bold"}}>Gs. 220.000.000</span></p>
            <p>Financiacón propia en guaranies</p>
            <p>hasta <span style={{fontWeight:"bold"}}>20 años</span>.</p>
            <button onClick={handleContacto} className="gold">Consultar Financiacón</button>
        </div>
    </div>
  )
}
export default Equilibrio