import "../scss/App.scss";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Landing.jsx";
import Create from "./Create.jsx";
import RenderProjects from "./RenderProjects.jsx";
import handleFetchCreate from "../services/onSubmit.js";
import { get, set, clear } from "../services/localStorage.js";

function App() {
  const [data, setData] = useState(
    get("data", {
      name: "", // Nombre del proyecto
      slogan: "", // Slogan del proyecto
      technologies: "", // Tecnologías
      repo: "", // Repo
      demo: "", // Demo
      desc: "", // Descripción
      author: "", // Nombre de la autora
      job: "", // Trabajo de la autora
      photo: "", // Foto de la autora
      image: "", // Foto del proyecto
    })
  );

  const [dataResponse, setDataResponse] = useState("");
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    set("data", { ...data });
  }, [data]);

  useEffect(() => {
    async function loadData() {
      const response = await fetch("http://localhost:4000/api/projects");

      const data = await response.json();

      setProjectsData(data.results);
      console.log(projectsData);
    }

    loadData();
  }, []);

  const handleReset = (event) => {
    event.preventDefault();
    clear();
    setData(
      get("data", {
        name: "",
        slogan: "",
        technologies: "",
        repo: "",
        demo: "",
        desc: "",
        author: "",
        job: "",
        photo: "",
        image: "",
      })
    );
  };

  const updateData = (fieldName, userValue) => {
    setData({ ...data, [fieldName]: userValue });
  };

  const updateAvatar = (fieldName, image) => {
    setData({ ...data, [fieldName]: image });
  };

  const createProject = () => {
    // data.autor = data.author;
    // delete data.author;
    handleFetchCreate(data).then((dataResponse) => {
      console.log(dataResponse);
      setDataResponse(dataResponse);
    });
  };

  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route
        path="/create"
        element={
          <>
            {" "}
            <div className="container">
              <Header />
              <main className="main">
                <Create
                  data={data}
                  updateAvatar={updateAvatar}
                  updateData={updateData}
                  onSubmit={createProject}
                  setDataResponse={setDataResponse}
                  dataResponse={dataResponse}
                  handleReset={handleReset}
                />
              </main>
              <Footer />{" "}
            </div>
          </>
        }
      ></Route>
      <Route
        path="/projects"
        element={
          <>
            {" "}
            <div className="container">
              <Header />
              <main className="main__projects">
                <RenderProjects projectsData={projectsData} />
              </main>
              <Footer />{" "}
            </div>
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
