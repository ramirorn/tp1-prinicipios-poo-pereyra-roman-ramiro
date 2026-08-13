class Persona {
    private readonly dni: string;
    nombre: string;

    private _edad: number = 0;
    private _email: string = "";

    constructor(dni: string, nombre: string, edad: number, email: string) {
        this.dni = dni;
        this.nombre = nombre;

        this.edad = edad;
        this.email = email;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(valor: number) {
        if (valor < 0 || valor > 120) {
            throw new Error("La edad no puede ser negativa ni mayor a 120.");
        }
        this._edad = valor;
    }

    get email(): string {
        return this._email;
    }

    set email(valor: string) {
        if (!valor.includes("@")) {
            throw new Error("El email debe contener @");
        }
        this._email = valor;
    }

    get esMayorDeEdad(): boolean {
        return this.edad >= 18;
    }

    get datosPublicos(): string {
        return `Nombre: ${this.nombre} - Es mayor de edad?: ${this.esMayorDeEdad}`;
    }
}

try {
    const persona = new Persona("46396487", "Ramiro", 18, "ramiro@gmail.com");
    console.log(persona.datosPublicos);

} catch (error) {
    console.log(error)
}