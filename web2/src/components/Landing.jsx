import { Link } from "react-router-dom";
import NaturaTechLogo from "../images/Logo.png"; // Ruta de la imagen

function Landing() {
  return (
    <div className="hero__landing">
      <section className="hero__content">
        <img
          className="content__logo"
          src={NaturaTechLogo}
          alt="Natura Tech logo"
        />
        <p className="content__slogan">
          Comparte proyectos sobre Naturaleza y sostenibilidad
        </p>
        <div className="buttons__landing">
          <div className="content__button">
            <Link to="/create" class="button__a">
              ¡Comparte tu proyecto!
            </Link>
          </div>
          <div className="content__button">
            <Link to="/create" className="button__a" href="#">
              Descubre proyectos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
