const Sequelize = require("sequelize");
const sequelize = new Sequelize("NodeJS", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  port: "3308",
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
    timestamps: true,
  },
  logging: false,
});

//TESTANDO CONEXAO COM BANCO
// sequelize
//   .authenticate()
//   .then(function () {
//     console.log("conectado no banco com sucesso");
//   })
//   .catch(function (err) {
//     console.log("falha ao se conectar" + err);
//   });

module.exports = { Sequelize, sequelize };
