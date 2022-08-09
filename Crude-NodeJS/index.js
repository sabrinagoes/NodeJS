const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const session = require("express-session");
const PORT = process.env.PORT || 3000;

// CONFIGURAÇÃO HANDLEBARS PARA TRABALHAR COM EXPFRESS
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs", //abreviando o método que o handlebars será chamado
    defaultLayout: "main",
  })
);

//app.use(express.static('public')); --> para utilizar o arquivos estáticos criados dentro do css ou js
//estrutura de pastas exemplo: Crude-NodeJS/public/css e .../js

//Utilizando body-parse
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "hbs");

app.get("/cad", (req, res) => {
  //res.send(req.body.name);
  //Validar valores q vieram do form
  //tratar valores
  //enviar para banco de dados
  var nome = req.body.nome;
  var email = req.body.email;

  //ARRAY PARA CONTER ERROS
  const erros = [];

  //REMOVER ESPAÇOS EM BRANCO DA VARIÁVEL
  nome = nom.trim();
  email = email.trim();

  //LIMPAR NOME DE CARACTERES ESPECIAIS(APENAS LETRAS)
  nome = nome.replace(/[^A-zÀ-ú\s]/gi, "");

  //VERIFICAR SE ESTÁ VAZIO
  if (nome == "" || typeof nome == undefined || nome == null) {
    erros.push({ mensagem: "Campo nome não pode ser vazio!" });
  }

  //VALIDACÃO SE O CAMPO DE NOME É VALIDO
  //var regexNome = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ-']+$/;
  if (!/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ-']+$/.test(nome)) {
    erros.push({ mensagem: "Nome inválido" });
  }

  if (email == "" || typeof email == undefined || email == null) {
    erros.push({ mensagem: "Campo email não pode ser vazio!" });
  }

  //var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    erros.push({ mensagem: "Email inválido" });
  }

  if (erros.length > 0) {
    console.log(erros);
    req.session.erros = erros;
    req.session.success = false;
    return res.redirect("/");
  }

  //SUCESSO NENHUM ERRO
  //SALVAR NO BANCO DE DADOS
  console.log("Validação realizada com sucesso!");
  req.session.success = true;
  return res.redirect("/");
});

app.get("/editar", (req, res) => {
  res.render("editar");
});

app.get("/users", (req, res) => {
  res.render("users", { NavActiveUsers: true });
});

app.use(
  session({
    secret: "CriarChave",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  if (req.session.erros) {
    var arrayErros = req.session.erros;
    res.render("index", { NavActiveCad: true, error: arrayErros });
  }

  if (req.session.success) {
    req.session.success = false;
    res.render("index", { NavActiveCad: true, MsgSucess: true });
  }
  res.render("index", { NavActiveCad: true });
});

app.listen(PORT, () => {
  console.log("Servidor rodando em http://localhost:" + PORT);
});

//npm i express-session --save
