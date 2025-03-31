/**
 * Producto
 * name
 * desc
 * created_at
 * created_by
 * stock
 * sku
 * 
 * Categoria
 * name
 * desc
 * created_at
 * created_by
 */

abstract class DatosBasicos {
    constructor(
        public name: string,
        public desc: string,
        protected created_at: Date,
        protected created_by: number
    ) { }

    get fullYear() {
        return this.created_at.getFullYear();
    }

    get fullDesc() {
        return `${this.name} - ${this.desc}`;
    }
}

class Producto extends DatosBasicos {
    constructor(
        public stock: number,
        public sku: number,
        name: string,
        desc: string,
        created_at: Date,
        created_by: number
    ) { super(name, desc, created_at, created_by) }

    override get fullDesc(): string {
        return `Producto: ${super.fullDesc}`;
    }

    guardar() {
        return "guardando producto...";
    }

}

class Categoria extends DatosBasicos {
    public productos: Producto[] = [];

    constructor(

        name: string,
        desc: string,
        created_at: Date,
        created_by: number
    ) { super(name, desc, created_at, created_by) }

    agregarProducto(producto: Producto) {
        this.productos.push(producto);
    }

    override get fullDesc(): string {
        return `Categoria: ${super.fullDesc}`;
    }

    guardar() {
        return "guardando categoria...";
    }
}

let producto = new Producto(100, 1, "Iphone", "este es un smartphone", new Date(), 1);

let categoria = new Categoria("Celulares", "", new Date(), 1);
categoria.agregarProducto(producto);

console.log(producto.fullDesc); // [Producto]