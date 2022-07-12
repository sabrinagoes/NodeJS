const express = require("express");
const router = express.Router();

//carros/fiat/uno

router.get("/", (req, res) => {
  res.send("<h1>Rota de Carros</h1>");
});

router.get("/fiat", (req, res) => {
  res.send("<h1>Rota fiat</h1>");
});

router.get("/fiat/uno", (req, res) => {
  res.send("<h1>Rota Uno</h1>");
});

// Rota com parâmetros
router.get("/:marca", (req, res) => {
  const marcas = ["fiat", "volks", "BMW"];
  if (marcas.includes(req.params.marca)) {
    res.send("A marca é" + req.params.marca);
  } else {
    res.status(404).send("<h1> MARCA NÃO ENCONTRADA</h1>");
  }
  res.send("<h1>A rota</h1>" + req.params.marca);
});

router.get("/:marca/:modelo", (req, res) => {
  res.send(req.params);
});

//Exportar roteamento
module.exports = router;
