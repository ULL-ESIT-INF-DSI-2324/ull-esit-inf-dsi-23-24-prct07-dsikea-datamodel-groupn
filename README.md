# PRÁCTICA 7 : Modelo de datos de un sistema de información que permite gestionar una tienda de muebles

**Grupo N**
*Nombre y apellidos: [Daniel Bensa Expósito Paz](https://github.com/Danixps?tab=repositories, "Enlace Github")*
*Nombre y apellidos: [Manuel David Gómez Alonso](https://github.com/ManuelDavidGomezAlonso?tab=repositories, "Enlace Github")*
*Nombre y apellidos: [Alejandro Javier Aguiar Pérez](https://github.com/AlejandroJ22?tab=repositories, "Enlace Github")*

*Asignatura: Desarrollo de Sistemas Informáticos (DSI)*

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupn/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct07-dsikea-datamodel-groupn?branch=main)

[![Tests](https://github.com/Danixps/ULL-DSI-P7/actions/workflows/node.js.yml/badge.svg)](https://github.com/Danixps/ULL-DSI-P7/actions/workflows/node.js.yml)

[Enunciado de la práctica 7](https://ull-esit-inf-dsi-2324.github.io/prct07-DSIkea-dataModel/)

![Imagen Ikea](images/Ikea.png)

## Índice
1. [Resumen](#resumen)
2. [Apartados](#apartados)
   - [Planteamiento del trabajo](#planteamiento-del-trabajo)
   - [La herramienta LiveShare](#la-herramienta-liveshare)
   - [Github Actions y Flujo de Trabajo Continuo](#github-actions-y-flujo-de-trabajo-continuo)
   - [Clase Furniture](#clase-furniture)
   - [Subclases muebles](#subclases-muebles)
   - [Clase Stock](#clase-stock)
   - [Inquirer](#inquirer)
   - [Lowdb](#lowdb)
3. [Problemas](#alternativas)
4. [Referencias](#referencias)
5. [Anexos](#anexos)

## Resumen
En esta práctica grupal, se nos ha pedido un programa en TypeScript destinado a gestionar una tienda de muebles llamada DSIkea. El código desarrollado se encuentra alojado en este mismo repositorio de Github. 

Algunas de las tareas previas requeridas fueron:

- La aceptación de la asignación grupal en GitHub Classroom y organización en equipos.
- El estudio de los módulos Inquirer.js y Lowdb para la gestión de una línea de comandos interactiva y persistencia de datos respectivamente a través del libro Essential TypeScript, por Adam Freeman.
- Configuración de TypeDoc para documentar nuestro código.
- Desarrollo de pruebas unitarias para garantizar el correcto funcionamiento de nuestro código y su robustez ante entradas no válidas o inesperadas.
- Configuración de las herramientas de cubrimiento de código (Coveralls), integración continua (GitHub Actions) y calidad del código (Sonar Cloud) para mejorar la calidad y fiabilidad de nuestro software.

Los requisitos del sistema que se nos exigían fueron:

- Creación de al menos 20 muebles diferentes.
- Implementación de funcionalidades para añadir, borrar y modificar muebles, proveedores y clientes mediante una línea de comandos interactiva. Para ello debíamos usar Inquirer.js para la interacción con el usuario y Lowdb para la persistencia de datos.
- Desarrollo de métodos para acceder a la información de estas entidades, permitiendo búsqueda por diferentes criterios y ordenación.
- Creación de la clase Stock para gestionar el tratamiento de la información del sistema, incluyendo control de stock, registro de transacciones y generación de informes sobre el stock disponible, ventas, compras y registros históricos de clientes y proveedores.

> **[Volver al índice](#índice)**

## Apartados
- ### Planteamiento del trabajo
Se optó principalmente por crear una clase Furniture que contiene un mapa de muebles, utilizando una interfaz furnitureMap para definir su estructura. Esta clase proporciona métodos para agregar muebles al mapa, obtener un mueble por su identificador y obtener un iterador para recorrer todos los muebles en el mapa.

La interfaz furnitureInterface define la estructura de un mueble, especificando los campos necesarios como ID, nombre, descripción, material, dimensiones y precio. Además, incluye métodos para obtener la información detallada del mueble y su nombre. Está interfaz la deben implementar todos los tipos de muebles, así con ello nos aseguramos de que no haya mueble que no cuente con los atributos básicos y que luego pueda contar con más atributos.

Para representar las dimensiones de un mueble, se utiliza un tipo Dimension que contiene las propiedades de longitud, ancho y altura.

Luego pasamos a crear cada clase de los 20 muebles requeridos, y en los cuales no vamos a profundizar demasiado ya que su estructura es bastante sencilla y la podemos repasar después.

Luego la siguiente decisión importante fue la de como manejar las dos estructuras de datos sobre proveedores y clientes, en principio pensamos en crear dos clases completamente diferentes, pero al ser dos clases que comparían mismos atributos y métodos lo que decidimos fue crear una sola clase de la cual se creen dos instancias (providers y clients). La clase EntityCollection representa una colección de entidades, donde cada entidad tiene un ID único, un nombre, información de contacto y una dirección. Esta clase proporciona métodos para realizar operaciones comunes en la colección de entidades, como encontrar entidades por diferentes campos (nombre, contacto, dirección), agregar nuevas entidades al mapa, obtener todas las entidades del mapa y proporcionar un iterador para recorrer todas las entidades en el mapa. Utiliza un mapa interno para almacenar las entidades, donde la clave es el ID único de la entidad.

Clase EntityCollection:
```ts
/**
 * Interfaz que define la estructura de una entidad.
 * @param id - Identificador único de la entidad.
 * @param name - Nombre de la entidad.
 * @param contact - Información de contacto de la entidad.
 * @param direction - Dirección de la entidad.
 */
export interface EntityInterface {
  id: number;
  name: string;
  contact: string;
  direction: string;
}

/**
 * Interfaz que representa un mapa de entidades.
 * @param entityMap - Mapa que contiene las entidades.
 */
export interface EntityMap<T extends EntityInterface> {
  entityMap: Map<number, T>;
}

/**
 * Clase que representa una colección de entidades.
 */
export class EntityCollection<T extends EntityInterface>
  implements EntityMap<T>, Iterable<T>
{
  /**
   * Constructor de la clase EntityCollection.
   * @param entityMap - Mapa que contiene las entidades.
  */
  constructor(public entityMap: Map<number, T>) {}

  /**
   * Encuentra entidades por un campo específico y un valor dado.
   * @param field - Campo por el cual buscar.
   * @param value - Valor a comparar.
   * @returns Un array de entidades que coinciden con el campo y valor dados.
   */
  findByField(field: keyof T, value: string | number): T[] {
    const results: T[] = [];
    for (const entity of this.entityMap.values()) {
      const fieldValue = entity[field];
      if (typeof fieldValue === "string" && typeof value === "string") {
        if (fieldValue.includes(value)) {
          results.push(entity);
        }
      } else if (fieldValue === value) {
        results.push(entity);
      }
    }
    return results;
  }

  /**
   * Encuentra entidades por nombre.
   * @param name - Nombre a buscar.
   * @returns Un array de entidades con el nombre especificado.
   */
  findByName(name: string): T[] {
    return this.findByField("name", name);
  }

  /**
   * Encuentra entidades por contacto.
   * @param contact - Contacto a buscar.
   * @returns Un array de entidades con el contacto especificado.
   */
  findByContact(contact: string): T[] {
    return this.findByField("contact", contact);
  }

  /**
   * Encuentra entidades por dirección.
   * @param direction - Dirección a buscar.
   * @returns Un array de entidades con la dirección especificada.
   */
  findByDirection(direction: string): T[] {
    return this.findByField("direction", direction);
  }

  /**
   * Método de iteración para la clase EntityCollection.
   * @returns Un iterador de las entidades en el mapa.
   */
  [Symbol.iterator](): IterableIterator<T> {
    return this.entityMap.values();
  }

  /**
   * Añade una entidad al mapa.
   * @param entity - La entidad a añadir.
   */
  add(entity: T): void {
    this.entityMap.set(entity.id, entity);
  }

  /**
   * Obtiene todas las entidades del mapa.
   * @returns Un array de todas las entidades en el mapa.
   */
  getAll() {
    return Array.from(this.entityMap.values());
  }
}
```

Respecto a la clase Stock definimos una clase que ...


> **[Volver al índice](#índice)**
- ### La herramienta LiveShare

> **[Volver al índice](#índice)**
- ### Github Actions y Flujo de Trabajo Continuo

> **[Volver al índice](#índice)**
- ### Clase Furniture

> **[Volver al índice](#índice)**
- ### Subclases muebles

> **[Volver al índice](#índice)**
- ### Clase Stock

> **[Volver al índice](#índice)**
- ### Inquirer

> **[Volver al índice](#índice)**
- ### Lowdb

> **[Volver al índice](#índice)**
## Problemas

> **[Volver al índice](#índice)**
## Referencias

> **[Volver al índice](#índice)**
## Anexos

> **[Volver al índice](#índice)**