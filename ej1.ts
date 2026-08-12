type categoriaDelProducto = "electrónica" | "almacén" | "computación";

class Producto {
    nombre: string;
    precio: number;
    categoria: categoriaDelProducto;
    stock: number;

    describir(): string {
        return `${this.nombre} ($${this.categoria}): Precio: $${this.precio} - Stock: ${this.stock}`;
    }

    hayStock(cantidad: number): boolean {
        if (this.stock >= cantidad) {
            return true;
        } else {
            return false;
        }
    }

    venderUnidades(cantidad: number): string {
        if (this.stock >= cantidad) {
            this.stock = this.stock - cantidad;
            return `Unidades vendidas: ${cantidad}`

        } else {
            return `No contamos con: ${cantidad} unidades`
        }
    }

    aplicarDescuento(porcentaje: number): number {
        let descuento = this.precio * porcentaje / 100;

        let precioFinal = this.precio - descuento;

        return precioFinal;
    }

    constructor(nombre: string, precio: number, categoria: categoriaDelProducto, stock: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }
}

const producto = new Producto("Guitarra", 4500, "electrónica", 50);
console.log("-----------------------------------------------------")
console.log(producto.describir());
console.log("-----------------------------------------------------")
console.log(`¿Hay stock del producto?: ${producto.hayStock(60)}`);
console.log("-----------------------------------------------------")
console.log(producto.venderUnidades(50));
console.log("-----------------------------------------------------")
console.log(`Stock luego de la venta: ${producto.describir()}`)
console.log("-----------------------------------------------------")
console.log(`Precio Final despues del descuento (simulacion): $${producto.aplicarDescuento(30)}`)
console.log("-----------------------------------------------------")
console.log(`Precio del producto sin el descuento: $${producto.precio}`)
console.log("-----------------------------------------------------")