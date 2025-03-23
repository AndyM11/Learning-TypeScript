// let mensaje: string = 'Hola Mundo';

// mensaje = "Lugar feliz";

// mensaje = "Adios mundo";
// console.log(mensaje);
// console.log(typeof []);

// /*
// Tipos de JS
// number
// string
// boolean
// null
// undefined
// object
// function

// Tipos de TS
// any <- cualquier tipo
// unknown <- cualquier tipo pero hay que hacer una validación
// nerver <- nunca retorna un valor
// araay <- arreglo
// tuple <- arreglo con un número fijo de elementos
// enums <- enumeración

// tipos infertidos
// */

// let extincionDinosaurios: number = 76_000_000;
// let dinasaurioFavorito: string = 'T-Rex';
// let extintoss: boolean = true;

// function saludo(hola: any) {
//     return hola;
// }

// let animales: string[] = ['perro', 'gato', 'pez', 'pajaro'];
// let nums: number[] = [1, 2, 3]
// let checks: boolean[] = [];
// let nums2: Array<number> = [1, 2, 3];

// // nums.map(x=>x.) // el autocompletado recomiendo elemento del tipo de datos.

// let tupla: [number, string] = [1, "firstName"]

// const chica = "s"
// const mediana = "m"
// const grande = "l"
// const extraGrande = "xl"

// enum Tallas { Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl" }

// const variable1 = Tallas.Grande;
// console.log(variable1);

// const enum LoadingState { Idle, Loading, Suceess, Error }

// const estado = LoadingState.Suceess;

// // Objetos

// type Direccion = {
//     numero: number,
//     calle: string,
//     pais: string
// }

// type Persona = {
//     readonly id: number,
//     nombre: string,
//     talla: Tallas,
//     doreccion: Direccion
// }

// const objeto: Persona = {
//     id: 1,
//     nombre: "Hola",
//     talla: Tallas.Mediana,
//     doreccion: {
//         numero: 1,
//         calle: "Siempre viva",
//         pais: "RD"
//     }
// }


// const arr: Persona[] = [];

// const fn: (a: number) => string = (edad: number) => {
//     if (edad > 17) return "puedes ingresar";
//     return "No puedes ingresar";
// }

// function validaEdad(edad: number, msg = "chanchito feliz"): string {
//     if (edad > 17) return `puedes ingresar ${msg}`;
//     return "No puedes ingresar";

//     // return "No puedes pasar";
// }

// validaEdad(18);

// function ErrorUsuario(): never {
//     throw new Error("error de usuario");
// }

// let puntaje: number | string = 98;

// puntaje = 'hola mundo';

// type Animal = {
//     id: number,
//     estado: string
// }

// type Usuario = {
//     id: number,
//     nombre: string
// }

// // Union types

// let animal: Usuario | Animal = { id: 1, estado: "", nombre: "" }

// function sumaDos(n: number | string): number {
//     if (typeof n === "number") {
//         return n + 2;
//     }
//     return parseInt(n) + 2;
// }

// sumaDos(2);

// //  intersection types

// type Audit = {
//     create_at: string,
//     modified_at: string
// }

// type Product = {
//     name: string,
// }

// const product: Audit & Product = {
//     create_at: "",
//     modified_at: "",
//     name: ""
// }

// // literal types

// type Fibo = 0 | 1 | 2 | 3 | 5;
// const nDeFibo: Fibo = 2;


// // nulltale type

// function toNumber(s: string | null | undefined): number {
//     return s ? parseInt(s) : 0;
// }

// const n = toNumber(undefined);

// // optional chain operator

// function getUser(id: number) {
//     if (id < 0) {
//         null
//     }
//     return {
//         id: 1,
//         name: "Andy",
//         create_at: new Date()
//     }
// }

// const user = getUser(1)
// console.log("Usuario: ", user?.create_at);

// const arr1 = null
// arr1?.[0]

// const fn5: any = null;
// fn5?.();

// // nullish coalescing operator

// const difficulty: number | null = null;

// const user2 = {
//     username: "andymreyes",
//     difficulty: difficulty ?? 0
// }

// console.log(user2);

// // type assertion

// const elem: any = null;

// const elem1 = elem as number;

// const input = <HTMLInputElement>document.getElementById("username");

// // type narrowing

// function isString(x: string | number) {
//     //  type narrowing
//     if (typeof x === "number") {
//         // x.valueOf()
//     }

//     if (typeof x === "string") {
//         // x.length
//     }
// }

// // type unknown

// function procesa(algo: unknown) {

//     if (typeof algo === "string") {
//         algo.toUpperCase();
//     }

//     if (typeof algo === "number") {
//         algo.toString();
//     }

//     if (algo instanceof String) {
//         //
//     }

//     // algo.haceCosas();
//     // algo.otrasCosas();
//     // algo.genkidama();
// }

//  POO
class Personaje {
    profesion?: string // ? opcional
    constructor(
        public readonly id: number,
        public name: string,
        public level: number,
        private _hp: number) {
    }

    subirNivel(): number {
        this.level++;
        return this.level;
    }

    cambiarHP(cantidad: number): number {
        this._hp += cantidad;
        // no pasar del maximo
        return this._hp;
    }

    get hp(): number {
        return this._hp;
    }

}

const personaje = new Personaje(1, "Andy", 1, 100);
personaje.cambiarHP(-10);
console.log(personaje); 