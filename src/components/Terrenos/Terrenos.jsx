import Financiacion from "./Financiacion/Financiacion";
import HeroTerrenos from "./HeroTerrenos/HeroTerrenos";
import HogarSonado from "./HogarSonado/HogarSonado";
import Planos from "./Planos/Planos";
import "./terrenos.css";
const Terrenos = () => {
  return (
    <>
      <HeroTerrenos />
      <HogarSonado />
      <section className="padding">
        <Financiacion />
      </section>
      <section className="padding20 secc80">
        <h2 style={{ paddingBottom: "20px" }}>Planos disponibles</h2>
        <p>Práctico y seguro, pensado para la comodidad de tus visitas.</p>
        <h2 style={{ padding: "20px 0" }}>
          Contamos con diferentes tamaños de lotes para adaptarse a tus
          necesidades.
        </h2>
        <p>
          - Lotes desde 242 m² hasta 481 m²
          <br />
          <br />
          - Diferentes ubicaciones dentro del barrio
          <br />
          <br />- Asesoramiento personalizado
        </p>
      </section>
      <section className="secc80">
        <h1
          style={{
            textAlign: "center",
            padding: "50px 0",
            paddingBottom: "20px",
          }}
        >
          ¿Listo para empezar?
        </h1>
        <h2
          style={{
            textAlign: "center",
            paddingBottom: "10px",
            fontWeight: "normal",
          }}
        >
          No pierdas esta oportunidad única de ser parte de Barrio Cerrado Isla
          Bogado.
        </h2>
      </section>
      <section className="secc80">
        <Planos/>
      </section>
    </>
  );
};
export default Terrenos;
