import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Mesas y sillas de cafetería.
 * Implementa la interfaz furnitureInterface.
 */
export class CafeFurniture implements furnitureInterface {
  /**
   * Constructor de la clase CafeFurniture.
   * @param id - Identificador único del mueble para cafetería.
   * @param name - Nombre del mueble para cafetería.
   * @param description - Descripción del mueble para cafetería.
   * @param material - Material del mueble para cafetería.
   * @param dimension - Dimensiones del mueble para cafetería.
   * @param price - Precio del mueble para cafetería.
   * @param tableShape - Forma de la mesa del mueble para cafetería.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public tableShape: string,
  ) {}

  /**
   * Obtiene la información detallada del mueble para cafetería.
   * @returns Una cadena con la información del mueble para cafetería.
   */
  getInfo(): string {
    return (
      `Mueble para cafetería: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Forma de la mesa: ${this.tableShape}`
    );
  }

  /**
   * Obtiene el nombre del mueble para cafetería.
   * @returns El nombre del mueble para cafetería.
   */
  getName(): string {
    return this.name;
  }
}
