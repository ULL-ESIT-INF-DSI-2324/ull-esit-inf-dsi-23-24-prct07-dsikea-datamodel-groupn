import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Muebles de Exterior para Jardín y Terraza.
 * Implementa la interfaz furnitureInterface.
 */
export class OutdoorFurniture implements furnitureInterface {
  /**
   * Constructor de la clase OutdoorFurniture.
   * @param id - Identificador único del mueble de exterior.
   * @param name - Nombre del mueble de exterior.
   * @param description - Descripción del mueble de exterior.
   * @param material - Material del mueble de exterior.
   * @param dimension - Dimensiones del mueble de exterior.
   * @param price - Precio del mueble de exterior.
   * @param weatherproof - Indica si el mueble de exterior es resistente a las inclemencias del tiempo.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public weatherproof: boolean,
  ) {}

  /**
   * Obtiene la información detallada del mueble de exterior.
   * @returns Una cadena con la información del mueble de exterior.
   */
  getInfo(): string {
    return (
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: Largo: ${this.dimension.length}, Ancho: ${this.dimension.width}, Altura: ${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `A prueba de mal tiempo: ${this.weatherproof ? "Sí" : "No"}`
    );
  }

  /**
   * Obtiene el nombre del mueble de exterior.
   * @returns El nombre del mueble de exterior.
   */
  getName(): string {
    return this.name;
  }
}
