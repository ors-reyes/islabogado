
import { color } from "three/tsl"
import Hero from "./hero/Hero"
const Home = () => {
  return (
    <section>
      <Hero/>
      <h1 style={{textAlign:"center", padding:"50px 0"}}>Barrio Cerrado <span style={{color:"var(--accent)"}}>Isla Bogado</span></h1>
    </section>
  )
}
export default Home