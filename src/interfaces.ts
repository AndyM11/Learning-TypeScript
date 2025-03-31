interface Animal {
    name: string;

    caminar(): void;
    onomatopeya(): string;
}

class Caballo implements Animal {
    name: string = "Rocinante";

    caminar(): void {
        console.log("caminando");
    }

    onomatopeya(): string {
        return "Hinnn";
    }
}

class Cerdo implements Animal {
    name: string = "Puerquito";

    caminar(): void {
        console.log("caminando");
    }

    onomatopeya(): string {
        return "Oink";
    }
}

class Perro implements Animal {
    name: string = "Fido";

    caminar(): void {
        console.log("caminando");
    }

    onomatopeya(): string {
        return "Guau";
    }
}

class DiccionarioUsuarios {
    [id: string]: string;
}

let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1a'] = "usuario1"
diccionarioUsuarios['2b'] = "usuario2"

console.log(DiccionarioUsuarios);