"use strict";
class Personaje {
    id;
    name;
    level;
    _hp;
    profesion;
    static equipo = 1;
    constructor(id, name, level, _hp) {
        this.id = id;
        this.name = name;
        this.level = level;
        this._hp = _hp;
    }
    subirNivel() {
        this.level++;
        return this.level;
    }
    static aggregarPersonaje() {
        Personaje.equipo++;
    }
    cambiarHP(cantidad) {
        this._hp += cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    static getEquipo() {
        return Personaje.equipo;
    }
}
const personaje = new Personaje(1, "Andy", 1, 100);
personaje.cambiarHP(-10);
const personaje1 = new Personaje(2, "Chanchito", 1, 120);
Personaje.aggregarPersonaje();
console.log(Personaje.getEquipo());
//# sourceMappingURL=index.js.map