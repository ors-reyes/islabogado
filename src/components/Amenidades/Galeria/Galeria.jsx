import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./galeria.css";
import AereaAmenidades from "../../assets/AereaAmenidades.jpg";
import SalonEventos from "../../assets/SalonEventos.jpg";
import piscina from "../../assets/piscina.jpg";
import SalonEventosIn from "../../assets/SalonEventosIn.jpg";
import senderos from "../../assets/senderos.jpg";
import quincho from "../../assets/quincho.jpg";
import canchaMultiuso from "../../assets/canchaMultiuso.jpg";
import gym from "../../assets/gym.jpg";
const Galeria = () => {
  Fancybox.bind("[data-fancybox]", {
    hideClass: false,
    dragToClose: true,
    Carousel: {
      Toolbar: {
        display: {
          left: ["counter"],
          middle: ["zoomIn", "zoomOut", "flipX"],
          right: ["close"],
        },
      },
      Thumbs: {
        type: "modern",
      },
    },
  });
  return (
    <section className="galeria">
      <h2>Galería</h2>
      <div className="grid">
        <a data-fancybox="gallery" data-src={AereaAmenidades}>
          <img src={AereaAmenidades} alt="Cancha de fútbol" />
        </a>
        <a data-fancybox="gallery" data-src={SalonEventos}>
          <img src={SalonEventos} alt="Gimnasio" />
        </a>
        <a data-fancybox="gallery" data-src={piscina}>
          <img src={piscina} alt="Área social" />
        </a>
        <a data-fancybox="gallery" data-src={SalonEventosIn}>
          <img src={SalonEventosIn} alt="Comedor" />
        </a>
        <a data-fancybox="gallery" data-src={senderos}>
          <img src={senderos} alt="Cancha de fútbol 2" />
        </a>

        <a data-fancybox="gallery" data-src={quincho}>
          <img src={quincho} alt="Área de parrilla" />
        </a>

        <a data-fancybox="gallery" data-src={canchaMultiuso}>
          <img src={canchaMultiuso} alt="Cancha de fútbol 2" />
        </a>

        <a data-fancybox="gallery" data-src={gym}>
          <img src={gym} alt="Área de parrilla" />
        </a>
      </div>
    </section>
  );
};
export default Galeria;
