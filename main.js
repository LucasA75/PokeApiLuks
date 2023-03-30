const pokemonCard = document.querySelector(".pokemonCard")
const imagenPoke = document.querySelector("img")
const tabla = document.querySelector("table")

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json()) // Esto convierte a json 
    .then(json => console.log(json)) // Imprime los datos en la consola
    .catch(err => console.log("Solicitud fallida", err)) // Captura el error





const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json()

        const pokemon = {
            img: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            numeroPokedex: data.order,
            tipo: data.types,
            peso: data.weight,
            habidades: data.abilities
        }
        pintarPoke(pokemon);
        datosPoke(pokemon)

    } catch (error) {
        console.log("Error", error)
    }
}

document.querySelector("#llamada").addEventListener("click", () => {

    let min = 1
    let max = 200
    let id = Math.floor(Math.random() * (max - min) + min);
    fetchData(id)
})



const pintarPoke = (pokemon) => {
    /* console.log(imagenPoke.src = pokemon.img) */
    imagenPoke.setAttribute("src", pokemon.img)
    /*     console.log(imagenPoke.getAttribute("src")) */
    pokemonCard.querySelector("h2").textContent = pokemon.nombre
}

const datosPoke = (pokemon) => {
   
    let tipoPoke = []
    pokemon.tipo.forEach(tipo => {
         tipoPoke += tipo.type.name + " ";

    });

    let habilidadesPoke = []
    pokemon.habidades.forEach(habilidad => {
         habilidadesPoke += habilidad.ability.name + "   ";

    });
    
    /* Accedo a la segunda fila , primera celda */
    tabla.rows[1].cells[0].textContent = tipoPoke
    tabla.rows[1].cells[1].textContent = pokemon.numeroPokedex
    tabla.rows[1].cells[2].textContent = pokemon.peso
    tabla.rows[1].cells[3].textContent = habilidadesPoke
 
   
}
