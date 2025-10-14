import CorazonLuque from "./CorazonLuque/CorazonLuque";
import ubicacion from "../assets/ubicacion.jpg";
import "./Ubicacion.css";
const Ubicacion = () => {
  return (
    <div className="ubicacion">
      <h1 style={{ paddingTop: "100px", width: "80%", margin: "auto" }}>
        Ubicación <span style={{ color: "var(--accent)" }}>ESTRATÉGICA</span>
      </h1>
      <p style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
        Isla Bogado está ubicado en Luque, con rápida conexión hacia Asunción y
        el Aeropuerto Internacional.
      </p>
      <div className="google-map-code">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5779936734352!2d-57.483213!3d-25.315946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf0069de1c3f%3A0x5473402c4780f01d!2sBarrio%20cerrado%20Isla%20Bogado!5e0!3m2!1ses-419!2spy!4v1760309486352!5m2!1ses-419!2spy"
          width="100%"
          margin="auto"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
      </div>
      <CorazonLuque />
      <section className="padding">
        <img style={{borderRadius:"20px"}} src={ubicacion} alt="ubicado en Luque" />
      </section>
    </div>
  );
};
export default Ubicacion;
