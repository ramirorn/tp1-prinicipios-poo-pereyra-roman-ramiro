class CuentaBancaria {
    readonly titular: string;
    private saldo: number;
    private historial: string[];

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;

        this.historial = [];
    }

    depositar(monto: number) {
        if (monto <= 0) {
            return "Ingrese un monto válido"
        } else {
            this.saldo = this.saldo + monto;
            this.historial.push(`Deposito de: $${monto}`);
            return `Has ingresado correctamente: $${monto}`;
        }
    }

    retirar(monto: number) {
        if (monto > this.saldo) {
            return "Saldo Insuficiente"
        } else {
            this.saldo = this.saldo - monto;
            this.historial.push(`Retiro de: $${monto}`);
            return `Has retirado correctamente: $${monto}`;
        }
    }

    consultarSaldo() {
        return `Tu saldo actual es de: $${this.saldo}`;
    }

    obtenerHistorial() {
        return this.historial
    }
}

const cuenta = new CuentaBancaria("Ramiro", 30000);

console.log("-----------------------------")
console.log(cuenta);
console.log("-----------------------------")
console.log(cuenta.consultarSaldo());
console.log("-----------------------------")
console.log(cuenta.depositar(500));
console.log("-----------------------------")
console.log(cuenta.consultarSaldo());
console.log("-----------------------------")
console.log(cuenta.retirar(500));
console.log("-----------------------------")
console.log(cuenta.consultarSaldo());
console.log("-----------------------------")
console.log("Historial:")
console.log(cuenta.obtenerHistorial())
console.log("-----------------------------")
