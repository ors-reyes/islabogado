import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Contactos from "./components/Contactos/Contactos"
import NavBar from "./components/nav/NavBar"

const App = () => {
  return (
     <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />        
        <Route path="/contactos" element={<Contactos/>} />
      </Routes>
      {/* <Footer/> */}
    </>
  )
}
export default App