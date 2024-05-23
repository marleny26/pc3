import { Pokemon } from './pokemon.js';

export class Entrenador {
    constructor(nombre, pokemons) {
        this.nombre = nombre;
        this.pokemons = pokemons.map(pokemon => new Pokemon(pokemon.nombre, pokemon.tipo, pokemon.foto));
    }

    getEntrenadorElement() {
        let pokemonElements = this.pokemons.map(pokemon => pokemon.getPokemonElement()).join('');
        return `
            <div class="trainer">
                <h2>${this.nombre}</h2>
                ${pokemonElements}
            </div>
        `;
    }
}
