# Taller de Lenguajes de Programación IV

## Proyecto en TypeScript

Este proyecto contiene una serie de ejercicios prácticos desarrollados en TypeScript, enfocados en conceptos fundamentales de programación orientada a objetos, encapsulamiento, herencia, validación de datos y manejo de clases.

### Autores

- Pereyra Roman, Ramiro Nicolás

### Materia

- Taller de Lenguajes de Programación IV

---

## Descripción general

El repositorio está compuesto por varios archivos `.ts`, cada uno representando un ejercicio con un enfoque distinto:

- `ej1.ts`: manejo de clases y métodos para productos con stock, descuento y ventas.
- `ej2.ts`: simulación de cuenta bancaria con depósito, retiro e historial.
- `ej3.ts`: implementación de empleados con herencia y cálculo de sueldos.
- `ej4.ts`: ejercicios de manejo de nóminas y polimorfismo entre distintos tipos de empleados.
- `ej5.ts`: validación de datos personales mediante getters, setters y control de errores.

El objetivo del proyecto es practicar la sintaxis y la lógica de TypeScript aplicando principios básicos de POO.

---

## Estructura del proyecto

```text
ts/
├── ej1.ts
├── ej2.ts
├── ej3.ts
├── ej4.ts
├── ej5.ts
├── package.json
├── tsconfig.json
├── README.md
├── node_modules/
└── package-lock.json
```

---

## Requisitos previos

Antes de ejecutar el proyecto, asegurate de tener instalado:

- Node.js 18 o superior
- npm

Puedes verificarlo con:

```bash
node -v
npm -v
```

---

## Instalación

Desde la raíz del proyecto, ejecutá:

```bash
npm install
```

Esto instalará las dependencias necesarias, incluida TypeScript.

---

## Ejecución

El proyecto cuenta con scripts configurados en `package.json` para correr cada ejercicio de forma simple.

### Scripts disponibles

| Script | Comando       | Descripción            |
| ------ | ------------- | ---------------------- |
| `ej1`  | `npm run ej1` | Ejecuta el ejercicio 1 |
| `ej2`  | `npm run ej2` | Ejecuta el ejercicio 2 |
| `ej3`  | `npm run ej3` | Ejecuta el ejercicio 3 |
| `ej4`  | `npm run ej4` | Ejecuta el ejercicio 4 |
| `ej5`  | `npm run ej5` | Ejecuta el ejercicio 5 |

### Ejemplos

```bash
npm run ej1
npm run ej2
npm run ej3
npm run ej4
npm run ej5
```

Cada script ejecuta directamente el archivo TypeScript correspondiente con Node.

---

## Configuración del proyecto

El archivo `package.json` define el proyecto como módulo ES y agrega los scripts de ejecución:

```json
{
  "type": "module",
  "scripts": {
    "ej1": "node ej1.ts",
    "ej2": "node ej2.ts",
    "ej3": "node ej3.ts",
    "ej4": "node ej4.ts",
    "ej5": "node ej5.ts"
  }
}
```

Además, `tsconfig.json` está configurado con opciones modernas y estrictas para TypeScript:

```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "strict": true,
    "noEmit": true,
    "erasableSyntaxOnly": true,
    "allowImportingTsExtensions": true,
    "skipLibCheck": true
  }
}
```

Esto permite un desarrollo más seguro y compatible con módulos de Node.

---

## Objetivos del trabajo

Este proyecto busca reforzar:

- Declaración y uso de clases.
- Encapsulamiento de atributos.
- Herencia y polimorfismo.
- Validación de reglas de negocio.
- Uso de getters y setters.
- Manejo de salida por consola.

---

## Notas finales

Si querés correr un ejercicio puntual, basta con usar su script correspondiente. El proyecto está pensado para ser simple, didáctico y fácilmente ejecutable desde la terminal.

---

## Licencia

Proyecto académico desarrollado para la materia Taller de Lenguajes de Programación IV.
