import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase que representa una Silla.
 * Implementa la interfaz furnitureInterface.
 */
export class auxiliaryCars implements furnitureInterface {
  /**
   * Constructor de la clase Armchair.
   * @param id - Identificador único de la silla.
   * @param name - Nombre de la silla.
   * @param description - Descripción de la silla.
   * @param material - Material de la silla.
   * @param dimension - Dimensiones de la silla.
   * @param price - Precio de la silla.
   * @param seatingCapacity - Capacidad de asientos de la silla.
   * @param hasArmrests - Indica si la silla tiene reposabrazos o no.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public capacity: number,
  ) {}

  /**
   * Obtiene la información detallada de la silla.
   * @returns Una cadena con la información de la silla.
   */
  getInfo(): string {
    return (
      `Carro auxiliar: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Capacidad: ${this.capacity} kg`
    );
  }

  /**
   * Obtiene el nombre de la silla.
   * @returns El nombre de la silla.
   */
  getName(): string {
    return this.name;
  }
}
