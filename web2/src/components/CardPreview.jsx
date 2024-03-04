import projectDefault from "../images/IMGreyes.jpg";
import authorDefault from "../images/lioness.jpg";

function CardPreview({ data }) {
  return (
    <>
      <section className="preview">
        <div
          className="projectImage"
          style={{ backgroundImage: `url('${data.image || projectDefault}')` }}
        />
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              Tarjeta Del Proyecto
            </span>
          </h2>

          <div className="card__author">
            <div
              className="card__authorPhoto"
              style={{
                backgroundImage: `url('${data.photo || authorDefault}')`,
              }}
            ></div>
            <p className="card__job">{data.job || "FullStack Developer"}</p>
            <h3 className="card__name">{data.author || "Emmelie Bjôrklund"}</h3>
          </div>

          <div className="card__project">
            <h3 className="card__name">
              <strong>{data.name || "Wild Workspace"}</strong>
            </h3>
            <p className="card__slogan">{data.slogan || "Diseños salvajes"}</p>
            <h3 className="card__descriptionTitle">
              <strong>Descripción del proyecto:</strong>
            </h3>
            <p className="card__description">
              {data.desc ||
                `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              quos? Itaque, molestias eveniet laudantium adipisci vitae ratione`}
            </p>

            <div className="card__technicalInfo">
              <p className="card__technologies">
                {data.technologies || "React JS - HTML - CSS"}
              </p>

              <a
                className="icon icon__www"
                href={data.demo || "#"}
                title="Haz click para ver el proyecto online"
                target="_blank"
              >
                Web link
              </a>
              <a
                className="icon icon__github"
                href={data.repo || "#"}
                title="Haz click para ver el código del proyecto"
                target="_blank"
              >
                GitHub link
              </a>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default CardPreview;
