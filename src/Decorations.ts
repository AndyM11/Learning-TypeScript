function Route(ruta: string) {
    return (constructor: Function) => {
        console.log("Ejecutando el decorador de ruta")
        constructor.prototype.route = ruta;
    }
}

function Method(metho: string) {
    return (target: any, methodName: string, descriptor: PropertyDecorator) => {
        console.log(methodName, descriptor);
        const original = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log("antes del metodo");
            original.call(this, ...args);
            console.log("despues del metodo");
        }
    }
}

@Route("/productos")
class Productos {
    @Method("GET")
    find(val: string) {
        console.log("Soy el metodo decorado" + val);
    }
}


const p = new Productos();
p.find(" hola mundo");

