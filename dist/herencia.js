"use strict";
class DatosBasicos {
    name;
    desc;
    created_at;
    created_by;
    constructor(name, desc, created_at, created_by) {
        this.name = name;
        this.desc = desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
    get fullDesc() {
        return `${this.name} - ${this.desc}`;
    }
}
class Producto extends DatosBasicos {
    stock;
    sku;
    constructor(stock, sku, name, desc, created_at, created_by) {
        super(name, desc, created_at, created_by);
        this.stock = stock;
        this.sku = sku;
    }
    get fullDesc() {
        return `Producto: ${super.fullDesc}`;
    }
    guardar() {
        return "guardando producto...";
    }
}
class Categoria extends DatosBasicos {
    productos = [];
    constructor(name, desc, created_at, created_by) { super(name, desc, created_at, created_by); }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    get fullDesc() {
        return `Categoria: ${super.fullDesc}`;
    }
    guardar() {
        return "guardando categoria...";
    }
}
let producto = new Producto(100, 1, "Iphone", "este es un smartphone", new Date(), 1);
let categoria = new Categoria("Celulares", "", new Date(), 1);
categoria.agregarProducto(producto);
console.log(producto.fullDesc);
//# sourceMappingURL=herencia.js.map