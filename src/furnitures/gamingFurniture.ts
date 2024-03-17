import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Muebles de Gaming.
 * Implementa la interfaz furnitureInterface.
 */
export class GamingFurniture implements furnitureInterface {
  /**
   * Constructor de la clase GamingFurniture.
   * @param id - Identificador único del mueble de gaming.
   * @param name - Nombre del mueble de gaming.
   * @param description - Descripción del mueble de gaming.
   * @param material - Material del mueble de gaming.
   * @param dimension - Dimensiones del mueble de gaming.
   * @param price - Precio del mueble de gaming.
   * @param consoleCompatibility - Lista de compatibilidad con consolas del mueble de gaming.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public consoleCompatibility: string[],
  ) {}

  /**
   * Obtiene la información detallada del mueble de gaming.
   * @returns Una cadena con la información del mueble de gaming.
   */
  getInfo(): string {
    return (
      `Nombre: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}€\n` +
      `Compatibilidad con consolas: ${this.consoleCompatibility.join(", ")}`
    );
  }

  /**
   * Obtiene el nombre del mueble de gaming.
   * @returns El nombre del mueble de gaming.
   */
  getName(): string {
    return this.name;
  }
}
