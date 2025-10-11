import { NavLink } from 'react-router-dom'
import "./navBar.css"

const NavBar = () => {
    const menuActive =()=>{
        const menu = document.querySelector(".menu")
        const nav = document.querySelector(".nav")
        nav.classList.toggle ("navActive")
        menu.classList.toggle ("menuActive")
      }
  return (
    <>
        <div className="navBar">
            <div className="menu" onClick={menuActive}></div>
            
            <NavLink  to={"/"}><div className='logo'></div></NavLink>
            
            <div className="nav">
                <NavLink  to={"/"} className="navItem">
                    <div  onClick={menuActive}>Inicio</div>
                </NavLink>
                <NavLink  to={"/ubicacion"} className="navItem">
                    <div  onClick={menuActive}>Ubicación</div>
                </NavLink>
                <NavLink  to={"/amenidades"} className="navItem">
                    <div  onClick={menuActive}>Amenidades</div>
                </NavLink>
                <NavLink  to={"/terrenos"} className="navItem">
                    <div  onClick={menuActive}>Terrenos</div>
                </NavLink>
                <NavLink  to={"/contactos"} className="navItem">
                    <div  onClick={menuActive}>Contacto</div>
                </NavLink>
                {/* <object className='rs' type='image/svg+xml' data='./redes.svg'></object> */}
            </div>
        </div>
        <div id="home"></div>
    </>
  )
}

export default NavBar
