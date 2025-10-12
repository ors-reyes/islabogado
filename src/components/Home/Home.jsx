
import Equilibrio from "./Equilibrio/Equilibrio"
import Hero from "./hero/Hero"
import HomeAmenities from "./HomeAmenities/HomeAmenities"
const Home = () => {
  return (
    <section>
      <Hero/>
      <h1 style={{textAlign:"center", padding:"50px 0"}}>Barrio Cerrado <span style={{color:"var(--accent)"}}>Isla Bogado</span></h1>
      <Equilibrio/>
      <HomeAmenities/>
    </section>
  )
}
export default Home