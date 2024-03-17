import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Mesas Altas.
 * Implementa la interfaz furnitureInterface.
 */
export class HighTable implements furnitureInterface {
  /**
   * Constructor de la clase HighTable.
   * @param id - Identificador único de la mesa alta.
   * @param name - Nombre de la mesa alta.
   * @param description - Descripción de la mesa alta.
   * @param material - Material de la mesa alta.
   * @param dimension - Dimensiones de la mesa alta.
   * @param price - Precio de la mesa alta.
   * @param tableShape - Forma de la mesa alta.
   * @param numberOfSeats - Número de asientos de la mesa alta.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public tableShape: string,
    public numberOfSeats: number,
  ) {}

  /**
   * Obtiene la información detallada de la mesa alta.
   * @returns Una cadena con la información de la mesa alta.
   */
  getInfo(): string {
    return (
      `Nombre: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}€\n` +
      `Forma de la mesa: ${this.tableShape}\n` +
      `Número de asientos: ${this.numberOfSeats}`
    );
  }

  /**
   * Obtiene el nombre de la mesa alta.
   * @returns El nombre de la mesa alta.
   */
  getName(): string {
    return this.name;
  }
}
