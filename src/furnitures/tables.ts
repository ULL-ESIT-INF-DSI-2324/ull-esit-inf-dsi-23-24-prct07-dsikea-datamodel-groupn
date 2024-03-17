import { Dimension, furnitureInterface } from "../furniture.js";

/**
 * Clase para Mesas.
 * Implementa la interfaz furnitureInterface.
 */
export class Tables implements furnitureInterface {
  /**
   * Constructor de la clase Tables.
   * @param id - Identificador único de la mesa.
   * @param name - Nombre de la mesa.
   * @param description - Descripción de la mesa.
   * @param material - Material de la mesa.
   * @param dimension - Dimensiones de la mesa.
   * @param price - Precio de la mesa.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
  ) {}

  /**
   * Obtiene la información detallada de la mesa.
   * @returns Una cadena con la información de la mesa.
   */
  getInfo(): string {
    return (
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: Largo: ${this.dimension.length}, Ancho: ${this.dimension.width}, Altura: ${this.dimension.height}\n` +
      `Precio: ${this.price}`
    );
  }

  /**
   * Obtiene el nombre de la mesa.
   * @returns El nombre de la mesa.
   */
  getName(): string {
    return this.name;
  }
}
