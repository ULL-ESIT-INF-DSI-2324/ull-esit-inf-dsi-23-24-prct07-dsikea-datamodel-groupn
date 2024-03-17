import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase que representa una Cama.
 * Implementa la interfaz furnitureInterface.
 */
export class Bed implements furnitureInterface {
  /**
   * Constructor de la clase Bed.
   * @param id - Identificador único de la cama.
   * @param name - Nombre de la cama.
   * @param description - Descripción de la cama.
   * @param material - Material de la cama.
   * @param dimension - Dimensiones de la cama.
   * @param price - Precio de la cama.
   * @param mattressSize - Tamaño del colchón de la cama.
   * @param hasHeadboard - Indica si la cama tiene cabecero o no.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public mattressSize: string,
    public hasHeadboard: boolean,
  ) {}

  /**
   * Obtiene la información detallada de la cama.
   * @returns Una cadena con la información de la cama.
   */
  getInfo(): string {
    const headboardInfo = this.hasHeadboard ? "Con cabecero" : "Sin cabecero";
    return (
      `Cama: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Tamaño del colchón: ${this.mattressSize}\n` +
      `${headboardInfo}`
    );
  }

  /**
   * Obtiene el nombre de la cama.
   * @returns El nombre de la cama.
   */
  getName(): string {
    return this.name;
  }
}
