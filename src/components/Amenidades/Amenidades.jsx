// import "./Amenidades.css";
import Galeria from "./Galeria/Galeria";
import Iconos from "./Iconos/Iconos";
const Amenidades = () => {
  return (
    <section className="padding secc80">
      <h1 style={{ paddingBottom: "20px" }}>Amenities Servicios</h1>
      <p>Todo lo que necesitás para una vida cómoda y segura, dentro del barrio.</p>
      <Iconos/>
      <section className="padding20">
        <h2 style={{ paddingBottom: "20px" }}>Planta de tratamiento y pozo artesiano</h2>
        <p>Sistema independiente de agua y tratamiento de aguas residuales.</p>
      </section>
      <section className="padding20">
        <h2 style={{ paddingBottom: "20px" }}>Estacionamiento</h2>
        <p>Práctico y seguro, pensado para la comodidad de tus visitas.</p>
      </section>
      <section className="padding20">
        <h2 style={{ paddingBottom: "20px" }}>Áreas de esparcimiento</h2>
        <p>Parques y espacios verdes para disfrutar en familia.</p>
      </section>
      <Galeria/>
    </section>
  );
};
export default Amenidades;
