/**
 * Interfaz para representar las dimensiones de un mueble.
 */
type Dimension = {
    width: number;
    height: number;
}

/**
 * Interfaz para representar un mueble que contenga al
 * menos un atributo que sirva como nombre.
 */
interface FurnitureDataInterface {
    /**
     * Nombre del mueble.
     */
    name: string;
    /**
     * Descripción del mueble.
     */
    description: string;
    /**
     * Material del que está hecho el mueble.
     */
    material: string;
    /**
     * Dimensiones del mueble.
     */
    dimension: Dimension;
    /**
     * Precio del mueble.
     */
    price: number;
}

/**
 * Interfaz para representar una colección de muebles.
 */
interface FurnitureMap<T> {
    /**
     * Mapa que contiene los muebles.
     */
    furnitureMap: Map<number, T>;
}

/**
 * Clase genérica Furniture que puede representar cualquier tipo de mueble.
 */
export abstract class Furniture<T extends FurnitureDataInterface> implements FurnitureMap<T>, Iterable<T> {
    /**
     * Crea una nueva instancia de la clase Furniture.
     * @param furnitureMap Mapa que contiene los muebles.
     */
    constructor(public furnitureMap: Map<number, T>) {}
}
