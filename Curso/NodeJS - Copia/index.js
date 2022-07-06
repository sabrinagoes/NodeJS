/*const { spawnSync } = require("child_process");
spawnSync("notepad.exe");
console.log(process);
console.log(console);
*/

//const calc = require("./modules/calculadora");
import { calculadora } from "./modules/calculadora.js";
console.log(calculadora.somar(5, 7));
console.log(calculadora.subtrair(4, 1));
