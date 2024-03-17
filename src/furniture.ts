/**
 * Tipo que representa las dimensiones de un mueble.
 */
export type Dimension = {
  length: number;
  width: number;
  height: number;
};

/**
 * Interfaz que define la estructura de un mueble.
 */
export interface furnitureInterface {
  id: number;
  name: string;
  description: string;
  material: string;
  dimension: Dimension;
  price: number;

  /**
   * Método para obtener la información detallada del mueble.
   * @returns Información detallada del mueble.
   */
  getInfo():string;

  /**
   * Método para obtener el nombre del mueble.
   * @returns Nombre del mueble.
   */
  getName():string;
}

/**
 * Interfaz que representa un mapa de muebles.
 */
export interface furnitureMap<T extends furnitureInterface> {
  /**
   * Mapa que contiene los muebles.
   */
  furnitureMap: Map<number, T>;
}

/**
 * Clase que representa una colección de muebles.
 */
export class Furniture<T extends furnitureInterface>
  implements furnitureMap<T>, Iterable<T>
{
  /**
   * Constructor de la clase FurnitureCollection.
   * @param furnitureMap - Mapa que contiene los muebles.
   */
  constructor(public furnitureMap: Map<number, T>) {}

  /**
   * Método de iteración para la clase FurnitureCollection.
   * @returns Un iterador de los muebles en el mapa.
   */
  [Symbol.iterator](): IterableIterator<T> {
    return this.furnitureMap.values();
  }

  /**
   * Agrega un mueble al mapa.
   * @param id - Identificador del mueble.
   * @param furniture - Mueble a agregar.
   */
  furnitureAdd(id: number, furniture: T): void {
    this.furnitureMap.set(id, furniture);
  }
  
  /**
 * Obtiene un mueble del mapa por su identificador.
 * @param id - Identificador del mueble.
 * @returns El mueble correspondiente al identificador, si existe; de lo contrario, undefined.
 */
  getKey(id: number): furnitureInterface | undefined {
    for (const furniture of this.furnitureMap.values()) {
      if (furniture.id === id) {
        return furniture;
      } else {
        return undefined;
      }
    }
  }

  /**
   * Obtiene el siguiente identificador de mueble en el mapa.
   * @returns El primer identificador de mueble, si existe; de lo contrario, -1.
   */
  // getId(): number {
  //   return this.furnitureMap.values().next().value.id;
  // }

  /**
   * Obtiene un mueble por su identificador.
   * @param id - Identificador del mueble.
   * @returns El mueble correspondiente al identificador, si existe; de lo contrario, undefined.
   */
  getFurniture(id: number): furnitureInterface | undefined {
    if (this.furnitureMap.get(id) === undefined) {
      return undefined;
    } else {
      return this.getKey(id); 
    }
  }
}