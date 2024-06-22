


const pokemonInfo = document.getElementById("pokemonInfo")
const button = document.getElementById("get-pokemon")

// nombre (name)ss, imagen(sprites[hay varios])ss, tipo(type[puede haber varios]), altura(height) y peso(weight)

const getPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
        if(response !== data.ok){
            throw new Error("Error 404")
        }
        else{
            return response.json()
        }
    })
    .then(data => {
            let template = `<img src=${data.sprites.front_default} alt=${data.name} image>
                            <h2><span>Nombre: </span>${data.name}</h2>
                            <p><span>Altura: </span>${data.height}<p>
                            <p><span>Peso: </span>${data.weight}</p>
                            <p><span>Tipo/s: </span> ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</P>`
            pokemonInfo.innerHTML = template;
    })
}


button.addEventListener("click", () => {
    const select = document.getElementById("pokemon-select").value
    if(select !== ""){
        getPokemon(select)
        
    }
})