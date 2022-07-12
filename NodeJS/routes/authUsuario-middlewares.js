const express = require("express");
const route = express.Router();

const usuarioLogado = true; //aqui usuario é criado para teste das rotas

route.use("/restrita", (req, res, next) => {
  if (!usuarioLogado) {
    res.redirect("/");
  }
  next();
});

route.get("/", (req, res) => {
  res.send("<H1>Página Inicial</H1>"); //res.send, res.end é para finalizar
});

route.get("/restrita", (req, res) => {
  res.send("<H1>Rota Restrita</H1>");
});

route.get("/restrita/usuarios", (req, res) => {
  res.send("<H1>Listar Usuarios</H1>");
});

module.exports = route;
