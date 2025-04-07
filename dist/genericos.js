"use strict";
async function fetData(recurso) {
    const respuesta = await fetch(`${recurso}`);
    return respuesta.json();
}
async function main() {
    const user = await fetData("https://jsonplaceholder.typicode.com/users/1");
}
class Programador {
    computador;
    constructor(t) {
        this.computador = t;
    }
}
const programador = new Programador({ encender: () => { }, apagar: () => { } });
const programador1 = new Programador("hola mundo");
programador1.computador.toUpperCase();
function fetchProduct() {
    return {
        key: "id de producto",
        value: { id: "id de producto" }
    };
}
function fetchStock() {
    return {
        key: "id de producto",
        value: 500
    };
}
class Usuario {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: "user_id", name: "Andy" });
class Estado {
    data = [];
    agregar(t) {
        this.data.push(t);
    }
    getEstado() {
        return this.data;
    }
}
class EstadoEliminar extends Estado {
    eliminar(id) {
        this.data = this.data.filter(x => x.id !== id);
    }
}
class EstadoUsuarios extends Estado {
    reiniciarContraseñas() {
    }
}
const estadoUsuarios = new EstadoUsuarios();
const calendar = { id: 1, fuente: "Google", dueño: "dueño" };
function getProp(objeto, property) {
    return objeto[property];
}
getProp(calendar, "id");
getProp(calendar, "fuente");
const keyVal = {
    "soy un string": 2,
};
const p = {
    x: 1,
    y: 2,
};
const p1 = {
    x: 1,
    y: 2,
};
const readOnlyP = {
    x: 1,
    y: 3,
    desc: "soy una descripcion"
};
//# sourceMappingURL=genericos.js.map