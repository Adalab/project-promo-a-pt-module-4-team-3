// Importar el componente CardPreview
import CardPreview from "./CardPreview";

function RenderProjects({ projectsData }) {
  return (
    <div className="projects__containerCards">
      {projectsData.map((project) => (
        // Renderiza el componente CardPreview para cada proyecto
        <CardPreview key={project.id} data={project} />
      ))}
    </div>
  );
}

export default RenderProjects;
