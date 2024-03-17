const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: "25mb" }));

// enlazar base de datos // se crea esta función, que se usará cuando hagamos un endpoint donde queramos hacer una petición.
async function getConnection() {
  const connection = await mysql.createConnection({
    host: "sql.freedb.tech",
    database: "freedb_Projects",
    user: "freedb_naturatech",
    password: "AQDkWH$mrv4&HJC",
  });
  await connection.connect();
  return connection;
}

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// ENDPOINTS

//endpoint prueba
server.get("/projects", (req, res) => {
  const response = {
    projects: [{ name: "NaturaTech" }, { name: "holis" }],
  };
  res.json(response);
});

// endpoint a la base de datos
// API listar proyectos

server.get("/api/projects", async (req, res) => {
  // Connectar con la base de datos

  const conn = await getConnection();

  // Lanzar un SELECT

  const queryGetProjects = `
    SELECT *
    FROM projects
    JOIN users ON projects.fkUsers = users.idusers
  `;

  const [results] = await conn.query(queryGetProjects);

  // Recuperar los datos

  // console.log(results);
  
  // Cerramos la conexion

  conn.close();

  res.json({ info: "nada", results: results });
});

// endpoint

// Guardar proyecto nuevo en la base de datos
server.post("/api/projectCard", async (req, res) => {
  // Datos vienen req.body
  console.log("Ha llamado al POST");
  console.log(req.body);

  // 1. Conectar a la bbdd

  const conn = await getConnection();

  // 2. Insertar los datos de la autora  Users
  const insertUser = ` 
  INSERT INTO users (author, job, photo)
  VALUES(?,?,?)`;

  const [resultsInsertUser] = await conn.execute(insertUser, [
    req.body.author,
    req.body.job,
    req.body.photo,
  ]);

  // 3. Recupero el id de Users
  console.log(resultsInsertUser.insertId);
  const fkUsers = resultsInsertUser.insertId;

  // 4. Insertar el proyecto Projects(fkUsers)
  const insertProject = `
  INSERT projects (name, slogan, repo, demo, technologies, \`desc\`, photo, fkUsers)
  VALUES (?,?,?,?,?,?,?,?);`;

  const [resultsInsertProject] = await conn.execute(insertProject, [
    req.body.name,
    req.body.slogan,
    req.body.repo,
    req.body.demo,
    req.body.technologies,
    req.body.desc,
    req.body.photo,
    fkUsers,
  ]);

  // 5. Recupero el id de Projects
  const idProject = resultsInsertProject.insertId;
  // 6. Cierro al conexion
  conn.end();
  // 7. Devuelvo el json
  res.json({
    succes: true,
    cardURL: `http://localhost:${serverPort}/projectCard/${idProject}`,
  });
});

// Mostrar el detalle de un proyecto (serv. dinámicos)
server.get("/projectCard/:id", (req, res) => {
  // Recibo el id del proyecto en un URL param
  // 1. Conectar a la bbdd
  // 2. Lanzar un SELECT para recuperar 1 proyecto con el id <- req.params
  // 3. Hago un template (EJS)
  // 4. Cierro la conexión
  // 5. res.render('plantilla', resultado)
});

// crear servidor de estáticos

server.use(express.static("./public"));
