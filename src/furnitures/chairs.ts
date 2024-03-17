import { Dimension, furnitureInterface } from "../furniture.js";

/**
 * Clase para Sillas.
 * Implementa la interfaz furnitureInterface.
 */
export class Chair implements furnitureInterface {
  /**
   * Constructor de la clase Chair.
   * @param id - Identificador único de la silla.
   * @param name - Nombre de la silla.
   * @param description - Descripción de la silla.
   * @param material - Material de la silla.
   * @param dimension - Dimensiones de la silla.
   * @param price - Precio de la silla.
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
   * Obtiene la información detallada de la silla.
   * @returns Una cadena con la información de la silla.
   */
  getInfo(): string {
    return (
      `Silla: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}`
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
