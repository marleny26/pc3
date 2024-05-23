export class Pokemon {
    constructor(nombre, tipo, foto) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.foto = foto;
    }

    getPokemonElement() {
        return `
            <div class="pokemon ${this.tipo}">
                <h3>${this.nombre}</h3>
                <img src="${this.foto}" alt="${this.nombre}">
            </div>
        `;
    }
}
