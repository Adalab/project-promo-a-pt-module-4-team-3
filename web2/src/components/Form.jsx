import GetAvatar from "./GetAvatar";
import Inputform from "./Inputform";
import { PropTypes } from "prop-types";

function Form({ data, updateData, updateAvatar, onSubmit, responseFetch }) {
  const handleInput = (event) => {
    updateData(event.currentTarget.name, event.currentTarget.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <>
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <Inputform
          className="addForm__input"
          type="text"
          name="name"
          id="name"
          value={data.name}
          placeholder="Nombre del proyecto"
          onInput={handleInput}
        />
        <Inputform
          className="addForm__input"
          type="text"
          name="slogan"
          id="slogan"
          value={data.slogan}
          placeholder="Slogan"
          onInput={handleInput}
        />
        <div className="addForm__2col">
          <Inputform
            className="addForm__input"
            type="url"
            name="repo"
            id="repo"
            value={data.repo}
            placeholder="Repositorio"
            onInput={handleInput}
          />
          <Inputform
            className="addForm__input"
            type="url"
            name="demo"
            id="demo"
            value={data.demo}
            placeholder="Demo"
            onInput={handleInput}
          />
        </div>
        <Inputform
          className="addForm__input"
          type="text"
          name="technologies"
          id="technologies"
          value={data.technologies}
          placeholder="Tecnologías"
          onInput={handleInput}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          value={data.desc}
          placeholder="Descripción"
          rows="5"
          onInput={handleInput}
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          name="author"
          id="author"
          value={data.author}
          placeholder="Nombre"
          onInput={handleInput}
        />
        <input
          className="addForm__input"
          type="text"
          name="job"
          id="job"
          value={data.job}
          placeholder="Trabajo"
          onInput={handleInput}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <GetAvatar
          text="Subir foto del proyecto"
          updateAvatar={updateAvatar}
          fieldName={"image"}
        />
        <GetAvatar
          text="Subir foto de la autora"
          updateAvatar={updateAvatar}
          fieldName={"photo"}
        />
        <button className="button--large" onClick={handleClick}>
          Guardar proyecto
        </button>
        {responseFetch !== "" && responseFetch.success && (
          <p>
            Tu proyecto ha sido creado en la siguiente dirección:
            <a href={responseFetch.cardURL}>{responseFetch.cardURL}</a>
          </p>
        )}
        {responseFetch !== "" && !responseFetch.success && (
          <p> Ha ocurrido un error: {responseFetch.error}</p>
        )}
      </fieldset>
    </>
  );
}

Form.propTypes = {
  data: PropTypes.object.isRequired,
  updateAvatar: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  responseFetch: PropTypes.string,
};

export default Form;
