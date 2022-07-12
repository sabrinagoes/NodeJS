const express = require("express");
const app = express();

//Importar roteamento
const carros = require("./routes/carros");
const usuario = require("./routes/authUsuario-middlewares");

//config
const PORT = process.env.PORT || 3000;

//MIDDLEWARES(INTERMEDIÁRIO-INTERCEPTADOR-MEIO)

// app.get("/", (req, res, next) => {
//   console.log("Eu o um middleware");
//   next(); // função para ir pro próximo
// });

// app.get("/", (req, res, next) => {
//   console.log("Eu o SEGUNDO middleware");
//   next();
// });

//GET, POST, PUT, DELETE

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/carros", carros); // usando route importada!

app.use("/authUsuario-middlewares", usuario);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
