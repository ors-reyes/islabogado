import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Contactos from "./components/Contactos/Contactos"
import NavBar from "./components/nav/NavBar"
import Ubicacion from "./components/Ubicacion/Ubicacion"
import Amenidades from "./components/Amenidades/Amenidades"
import Terrenos from "./components/Terrenos/Terrenos"
import Footer from "./components/Footer/Footer"

const App = () => {  
  return (
     <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />        
        <Route path="/contactos" element={<Contactos/>} />
        <Route path="/ubicacion" element={<Ubicacion/>} />
        <Route path="/amenidades" element={<Amenidades/>} />
        <Route path="/terrenos" element={<Terrenos/>} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App