// Importar el componente CardPreview
import CardPreview from "./CardPreview";
import { Link } from "react-router-dom";

function RenderProjects({ projectsData }) {
  return (
    <div className="projects__containerCards">
      {projectsData.map((project) => (
        // Renderiza el componente CardPreview para cada proyecto
        <div>
          <CardPreview key={project.id} data={project} />
          <Link to={`/projectCard/${project.idprojects}`}>Ver Proyecto!!</Link>
        </div>
      ))}
    </div>
  );
}

export default RenderProjects;
