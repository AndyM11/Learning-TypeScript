import * as G from './Group';
import { Point, PUNTITO } from './Point';
import { Animales, Caballos, Chanchitos } from "./Animales";


console.log(Animales, Chanchitos, Caballos);

const point = new Point(1, 2);

const group = new G.default(1, "Grupo 1");

console.log(PUNTITO);
console.log(G.defaultGroups.admin);