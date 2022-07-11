//MODULO DE WEB SERVER - HTTP

const fs = require("fs");

const http = require("http");

const hostname = "127.0.0.1";
const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  let url = req.url;
  if (url === "/") {
    fs.readFile("./public/index.html", (err, conteudo) => {
      if (err) {
        throw err;
      }
      res.statusCode = 200;
      res.setHeader("Content-type", "text/html;charset=utf-8");
      res.end(conteudo);
    });
  }
  console.log(req);
  if (url === "/sobre") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html;charset=utf-8");
    res.end("<h1>Página Sobre</h1>");
  }

  if (url === "/contato") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html;charset=utf-8");
    res.end("<h1>Página de Contato</h1>");
  }

  if (url === "/teste") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html;charset=utf-8");
    res.end("<h1>Página de Teste</h1>");
  }

  if (url === "/nodemon") {
    //Para atualização automática intalar o nodemon command:npm install -g nodemon
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html;charset=utf-8");
    res.end("<h1>Página de Teste Nodemon</h1>");
  }
});

server.listen(PORT, hostname, function () {
  console.log(`Servidor rodando em http://${hostname}:${PORT}`);
});
