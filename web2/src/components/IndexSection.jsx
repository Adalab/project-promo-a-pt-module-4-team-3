import { Link } from "react-router-dom";

function IndexSection() {
  return (
    <>
      <section className="hero">
        <h2 className="title">NATURA TECH</h2>
        <p className="hero__text">
          Biblioteca digital para recoger ideas salvajes a través de la
          tecnología
        </p>
        <Link className="button--link" to="/projects">
          {" "}
          Ver proyectos
        </Link>
      </section>
    </>
  );
}

export default IndexSection;
