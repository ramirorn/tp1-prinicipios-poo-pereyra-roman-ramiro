class Empleado {
    protected nombre: string;
    protected antiguedad: number;

    constructor(nombre: string, antiguedad: number) {
        this.nombre = nombre;
        this.antiguedad = antiguedad
    }

    calcularSueldo(): number {
        return 0;
    }

    describir(): string {
        return `${this.nombre} (${this.antiguedad} años) - Sueldo: ${this.calcularSueldo()}`
    }
}

class EmpleadoFijo extends Empleado {
    sueldoBase: number;

    constructor(nombre: string, antiguedad: number, sueldoBase: number) {
        super(nombre, antiguedad);
        this.sueldoBase = sueldoBase
    }

    calcularSueldo(): number {
        let porcentaje = this.sueldoBase * 2 / 100;
        let bono = porcentaje * this.antiguedad;

        return this.sueldoBase + bono;
    }
}

const empleado = new EmpleadoFijo("Ramiro", 5, 4500)
console.log("-----------------------------")
console.log(empleado.describir())
console.log("-----------------------------")
console.log(empleado.calcularSueldo())
console.log("-----------------------------")