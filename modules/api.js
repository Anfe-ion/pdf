export function apiConsult(){
    var url = `https://pokeapi.co/api/v2/pokemon/`;
    var api = new XMLHttpRequest();

    api.open("GET", url, true)

    api.onload = function(){
        if(api.status >= 200 && api.status < 300) {
            var data = JSON.parse(api.responseText);
            var resultados = data.results

            resultados.forEach(pokemon => {
                let apiSpan = document.getElementById("apiData")
                apiSpan.innerHTML +=  'Nombre del Pokémon: ' + pokemon.name + '<br>';
                console.log('Nombre del pokemon: ', pokemon.name)
            });
        }else{
            console.error('Error de la solicitud: ', api.statusText)
        };        
    }
    api.send();
}
