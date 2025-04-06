// function log<T, V>(a: T, b: V): V {
//     console.log(a, b);

//     return b;
// }

// log<string, number>("dato", 42);
// log<string, string>("dato", "dato2");

// log(1, 2);
// log("Saludos", "Hola Mundo");

async function fetData<T>(recurso: string): Promise<T> {
    const respuesta = await fetch(`${recurso}`);
    return respuesta.json()
}

type User = {
    id: string,
    name: string,
}

async function main() {
    const user = await fetData<User>("https://jsonplaceholder.typicode.com/users/1")
}

type Computador = {
    encender: () => void,
    apagar: () => void,
}

class Programador<T> {
    computador: T;
    constructor(t: T) {
        this.computador = t;
    }
}

const programador = new Programador<Computador>({ encender: () => { }, apagar: () => { } });

const programador1 = new Programador<string>("hola mundo")

programador1.computador.toUpperCase()


interface KeyValue<T, V> {
    key: T,
    value: V,
}

interface Product {
    id: string
}

function fetchProduct(): KeyValue<string, Product> {
    return {
        key: "id de producto",
        value: { id: "id de producto" }
    }
}

function fetchStock(): KeyValue<string, number> {
    return {
        key: "id de producto",
        value: 500
    }
}

// interface Usuario {
//     id: string,
//     name: string,
// }

class Usuario {
    constructor(
        public id: string,
        public name: string) { }
}


function print<T extends Usuario>(t: T): T {
    console.log(t);
    return t;
}

print({ id: "user_id", name: "Andy" });


class Estado<T> {
    protected data: T[] = [];

    agregar(t: T): void {
        this.data.push(t);
    }

    getEstado(): T[] {
        return this.data;
    }
}

type ObjectID = {
    id: string;
}

class EstadoEliminar<T extends ObjectID> extends Estado<T> {
    eliminar(id: string) {
        this.data = this.data.filter(x => x.id !== id)
    }
}

class EstadoUsuarios extends Estado<Usuario> {
    reiniciarContraseñas() {
        //
    }
}

const estadoUsuarios = new EstadoUsuarios();

type Calendar = {
    id: number,
    fuente: string,
    dueño: string,
}

const calendar: Calendar = { id: 1, fuente: "Google", dueño: "dueño" }

function getProp<T>(objeto: T, property: string): unknown {
    return objeto[property as keyof T]
}

getProp<Calendar>(calendar, "id")
getProp<Calendar>(calendar, "fuente")

type Punto = {
    x: number
    y: number
    desc?: string
}

type PuntoOpcional = Partial<Punto> // hace que todas las propiedades sean opcionales
type PuntoRequerido = Required<Punto> // hace que todas las propiedades sean requeridas


const keyVal: Record<string, number> = {
    "soy un string": 2,
}

type kv = { [key: string]: number } // es lo mismo que el Record

const p: Omit<Punto, "desc"> = {
    x: 1,
    y: 2,
}

const p1: Pick<Punto, "x" | "y"> = {
    x: 1,
    y: 2,
}

const readOnlyP: Readonly<Punto> = {
    x: 1,
    y: 3,
    desc: "soy una descripcion"
}