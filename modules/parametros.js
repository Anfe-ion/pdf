export function parametros(){
    var param1 = "nombre=Paquita"
    var param2 = "raza=Brahman"
    var param3 = "peso=680"
    
    //concat
    var urlWParams = "index.html?" + param1 + "&" + param2 + "&" + param3;
    //redireccion
    window.location.href = urlWParams;  
}

