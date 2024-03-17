import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Separadores de Ambientes.
 * Implementa la interfaz furnitureInterface.
 */
export class RoomDivider implements furnitureInterface {
  /**
   * Constructor de la clase RoomDivider.
   * @param id - Identificador único del separador de ambientes.
   * @param name - Nombre del separador de ambientes.
   * @param description - Descripción del separador de ambientes.
   * @param material - Material del separador de ambientes.
   * @param dimension - Dimensiones del separador de ambientes.
   * @param price - Precio del separador de ambientes.
   * @param style - Estilo del separador de ambientes.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public style: string,
  ) {}

  /**
   * Obtiene la información detallada del separador de ambientes.
   * @returns Una cadena con la información del separador de ambientes.
   */
  getInfo(): string {
    return (
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: Largo: ${this.dimension.length}, Ancho: ${this.dimension.width}, Altura: ${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Estilo: ${this.style}`
    );
  }

  /**
   * Obtiene el nombre del separador de ambientes.
   * @returns El nombre del separador de ambientes.
   */
  getName(): string {
    return this.name;
  }
}
