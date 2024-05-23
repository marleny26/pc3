import { Entrenador } from './component/entrenador';

class PokemonApp {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
    }

    fetchData() {
        return $.getJSON(this.dataUrl);
    }

    generateHTML(data) {
        let html = '';

        data.forEach(entrenadorData => {
            const entrenador = new Entrenador(entrenadorData.entrenador, entrenadorData.pokemons);

            html += `
                <div class="trainer">
                    <h2>${entrenador.nombre}</h2>
                    <div class="pokemon-list">
            `;

            entrenador.pokemons.forEach(pokemon => {
                html += `
                    <div class="pokemon ${pokemon.tipo}">
                        <h3>${pokemon.nombre}</h3>
                        <img src="${pokemon.foto}" alt="${pokemon.nombre}">
                    </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        return html;
    }

    render() {
        this.fetchData().then(data => {
            const html = this.generateHTML(data);
            $('#trainers-list').html(html);
        }).catch(error => {
            console.error('Error fetching data:', error);
        });
    }
}

$(document).ready(function() {
    const app = new PokemonApp('data/pokemons.json');
    app.render();
});
