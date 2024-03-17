import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Conjuntos de Muebles.
 * Implementa la interfaz furnitureInterface.
 */
export class FurnitureSet implements furnitureInterface {
  /**
   * Constructor de la clase FurnitureSet.
   * @param id - Identificador único del conjunto de muebles.
   * @param name - Nombre del conjunto de muebles.
   * @param description - Descripción del conjunto de muebles.
   * @param material - Material del conjunto de muebles.
   * @param dimension - Dimensiones del conjunto de muebles.
   * @param price - Precio del conjunto de muebles.
   * @param numberOfPieces - Número de piezas del conjunto de muebles.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public numberOfPieces: number,
  ) {}

  /**
   * Obtiene la información detallada del conjunto de muebles.
   * @returns Una cadena con la información del conjunto de muebles.
   */
  getInfo(): string {
    return (
      `Nombre: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}€\n` +
      `Número de piezas: ${this.numberOfPieces}`
    );
  }

  /**
   * Obtiene el nombre del conjunto de muebles.
   * @returns El nombre del conjunto de muebles.
   */
  getName(): string {
    return this.name;
  }
}
