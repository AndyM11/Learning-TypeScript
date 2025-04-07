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
diccionarioUsuarios['a1'] = "usuario2";
console.log(diccionarioUsuarios);
//# sourceMappingURL=interfaces.js.map