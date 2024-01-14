export function paramConsult(){
    // Obtener la cadena de consulta de la URL
    var URLConsultada = window.location.search;

    // Crear un objeto URLSearchParams basado en la cadena de consulta
    var parametros = new URLSearchParams(URLConsultada);
    
    // Obtener valores de los parámetros por nombre
    var nombre = parametros.get("nombre");
    var raza = parametros.get("raza")
    var peso = parametros.get("peso")

    console.log("Nombre:", nombre);
    console.log("Raza:", raza);
    console.log("Peso:", peso);
}