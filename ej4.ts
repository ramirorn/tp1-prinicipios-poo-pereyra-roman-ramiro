class Empleado {
    protected nombre: string;
    protected antiguedad: number;

    constructor(nombre: string, antiguedad: number) {
        this.nombre = nombre;
        this.antiguedad = antiguedad;
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

class EmpleadoPorHoras extends Empleado {
    horasTrabajadas: number;
    valorHora: number;

    constructor(nombre: string, antiguedad: number, horasTrabajadas: number, valorHora: number) {
        super(nombre, antiguedad);
        this.horasTrabajadas = horasTrabajadas;
        this.valorHora = valorHora;
    }

    calcularSueldo(): number {
        return this.horasTrabajadas * this.valorHora;
    }
}

class EmpleadoPorComision extends Empleado {
    ventasDelMes: number;
    porcentajeComision: number;

    constructor(nombre: string, antiguedad: number, ventasDelMes: number, porcentajeComision: number) {
        super(nombre, antiguedad);
        this.ventasDelMes = ventasDelMes;
        this.porcentajeComision = porcentajeComision;
    }

    calcularSueldo(): number {
        return this.ventasDelMes * (this.porcentajeComision / 100);
    }

}


const empleados: Empleado[] = [
    new EmpleadoFijo("Ramiro", 5, 4500),
    new EmpleadoPorHoras("Ramiro", 4, 5, 4000),
    new EmpleadoPorComision("Ramiro", 4, 5000, 3)
]

for (let i = 0; i < empleados.length; i++) {
    // console.log(`Empleado ${empleados[i].describir()}`)
    console.log(`Sueldos ${empleados[i].calcularSueldo()}`)
}

function calcularNomina(empleados: Empleado[]): number {
    let totalAPagar = 0;
    for (const empleado of empleados) {
        totalAPagar += empleado.calcularSueldo();
    }

    return totalAPagar;
}

console.log(`Total a pagar: ${calcularNomina(empleados)}`)


