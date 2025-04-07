"use strict";
class Caballo {
    name = "Rocinante";
    caminar() {
        console.log("caminando");
    }
    onomatopeya() {
        return "Hinnn";
    }
}
class Cerdo {
    name = "Puerquito";
    caminar() {
        console.log("caminando");
    }
    onomatopeya() {
        return "Oink";
    }
}
class Perro {
    name = "Fido";
    caminar() {
        console.log("caminando");
    }
    onomatopeya() {
        return "Guau";
    }
}
class DiccionarioUsuarios {
}
let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1a'] = "usuario1";
diccionarioUsuarios['2b'] = "usuario2";
console.log(DiccionarioUsuarios);
//# sourceMappingURL=interfases.js.map