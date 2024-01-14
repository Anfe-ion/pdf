import { generatePDF } from "./modules/pdf.js";
import { parametros } from "./modules/parametros.js";
import { paramConsult } from "./modules/paramConsult.js";
import { apiConsult } from "./modules/api.js";

document.querySelector("#pdf").addEventListener("click", generatePDF);
document.querySelector("#parametros").addEventListener("click", parametros);
document.querySelector("#paramConsult").addEventListener("click", paramConsult);
document.querySelector("#apiConsult").addEventListener("click", apiConsult);