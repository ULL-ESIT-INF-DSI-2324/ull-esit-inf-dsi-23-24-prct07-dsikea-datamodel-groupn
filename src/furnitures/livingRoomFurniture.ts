import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Muebles de Sala de Estar.
 * Implementa la interfaz furnitureInterface.
 */
export class LivingRoomFurniture implements furnitureInterface {
  /**
   * Constructor de la clase LivingRoomFurniture.
   * @param id - Identificador único del mueble de sala de estar.
   * @param name - Nombre del mueble de sala de estar.
   * @param description - Descripción del mueble de sala de estar.
   * @param material - Material del mueble de sala de estar.
   * @param dimension - Dimensiones del mueble de sala de estar.
   * @param price - Precio del mueble de sala de estar.
   * @param hasArmchairs - Indica si el mueble de sala de estar tiene sillones o no.
   * @param hasCoffeeTable - Indica si el mueble de sala de estar tiene mesa de café o no.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public hasArmchairs: boolean,
    public hasCoffeeTable: boolean,
  ) {}

  /**
   * Obtiene la información detallada del mueble de sala de estar.
   * @returns Una cadena con la información del mueble de sala de estar.
   */
  getInfo(): string {
    return (
      `Nombre: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}€\n` +
      `¿Tiene sillones? ${this.hasArmchairs ? "Sí" : "No"}\n` +
      `¿Tiene mesa de café? ${this.hasCoffeeTable ? "Sí" : "No"}`
    );
  }

  /**
   * Obtiene el nombre del mueble de sala de estar.
   * @returns El nombre del mueble de sala de estar.
   */
  getName(): string {
    return this.name;
  }
}
