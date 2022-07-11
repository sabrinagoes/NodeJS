// MODULO DE ARQUIVOS DO SISTEMA FILE SYSTEM

const fs = require("fs");

// CRIAR ARQUIVO  / ATUALIZAR

//fs.writeFile() - substitui o arquivo e o conteudo caso exista, se não existir cria arquivo novo com conteúdo que você passar

//fs.appendFile() - adiciona conteúdo num arquivo, se o arquivo não existir ele cria

//fs.open - abre um arquivo para leitura, se o arquivo não existir ele cria vazio, para criar arquivo usa a flag W
// if (!fs.existsSync("./teste.txt")) {
//   fs.writeFile("teste.txt", "teste de conteúdo", (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Arquivo criado com sucesso!");
//   });
// }

//fs.appendFile() - adiciona o conteudo no arquivo se existir, caso não exista ele cria o arquivo

// fs.appendFile("teste.txt", "\nAdicionando conteúdo novo", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Arquivo atualizado!");
// });

//fs.open()
// fs.open("arquivo.txt", "w", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Salvo!");
// });

//fs.unlink() - deleta arquivo

// fs.unlink("new-name.txt", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Arquivo excluído!");
// });

// fs.rename("arquivo.txt", "new-name.txt", (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Arquivo Renomeado!");
// });

//LER ARQUIVOS
//fs.readFile() - ler arquivo
