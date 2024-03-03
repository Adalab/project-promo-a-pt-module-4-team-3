const express = require("express");
const cors = require("cors");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

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

//hacer un endpoint
server.get("/projects", (req, res) => {
  const response = {
    projects: [{ name: "NaturaTech" }, { name: "holis" }],
  };
  res.json(response);
});

// crear servidor de estáticos

server.use(express.static("./public"));
