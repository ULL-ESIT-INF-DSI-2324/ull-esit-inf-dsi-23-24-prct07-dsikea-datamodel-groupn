import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Muebles de Comedor.
 * Implementa la interfaz furnitureInterface.
 */
export class DiningRoomFurniture implements furnitureInterface {
  /**
   * Constructor de la clase DiningRoomFurniture.
   * @param id - Identificador único del mueble de comedor.
   * @param name - Nombre del mueble de comedor.
   * @param description - Descripción del mueble de comedor.
   * @param material - Material del mueble de comedor.
   * @param dimension - Dimensiones del mueble de comedor.
   * @param price - Precio del mueble de comedor.
   * @param numberOfSeats - Número de asientos del mueble de comedor.
   * @param tableShape - Forma de la mesa del mueble de comedor.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public numberOfSeats: number,
    public tableShape: string,
  ) {}

  /**
   * Obtiene la información detallada del mueble de comedor.
   * @returns Una cadena con la información del mueble de comedor.
   */
  getInfo(): string {
    return (
      `Nombre: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}€\n` +
      `Número de asientos: ${this.numberOfSeats}\n` +
      `Forma de la mesa: ${this.tableShape}\n`
    );
  }

  /**
   * Obtiene el nombre del mueble de comedor.
   * @returns El nombre del mueble de comedor.
   */
  getName(): string {
    return this.name;
  }
}
