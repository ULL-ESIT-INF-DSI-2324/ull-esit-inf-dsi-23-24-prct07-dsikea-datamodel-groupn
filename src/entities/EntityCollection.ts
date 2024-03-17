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
