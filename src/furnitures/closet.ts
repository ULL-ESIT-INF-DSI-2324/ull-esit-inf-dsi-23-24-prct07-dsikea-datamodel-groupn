import { Dimension, furnitureInterface } from "../furniture.js";

/**
 * Clase para Armarios.
 * Implementa la interfaz furnitureInterface.
 */
export class Closet implements furnitureInterface {
  /**
   * Constructor de la clase Closet.
   * @param id - Identificador único del armario.
   * @param name - Nombre del armario.
   * @param description - Descripción del armario.
   * @param material - Material del armario.
   * @param dimension - Dimensiones del armario.
   * @param price - Precio del armario.
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
   * Obtiene la infromación detallada del armario.
   * @returns Una cadena con la información del armario.
   */
  getInfo(): string {
    return (
      `Armario: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Descripción: ${this.description}`
    ); 
  }

  /**
   * Obtiene el nombre del armario.
   * @returns El nombre del armario.
   */
  getName(): string {
    return this.name;
  }
}

