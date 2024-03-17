import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Racks.
 * Implementa la interfaz furnitureInterface.
 */
export class Racks implements furnitureInterface {
  /**
   * Constructor de la clase Racks.
   * @param id - Identificador único del rack.
   * @param name - Nombre del rack.
   * @param description - Descripción del rack.
   * @param material - Material del rack.
   * @param dimension - Dimensiones del rack.
   * @param price - Precio del rack.
   * @param numberOfShelves - Número de estantes del rack.
   * @param hasDrawers - Indica si el rack tiene cajones o no.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public numberOfShelves: number,
    public hasDrawers: boolean,
  ) {}

  /**
   * Obtiene la información detallada del rack.
   * @returns Una cadena con la información del rack.
   */
  getInfo(): string {
    return (
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: Largo: ${this.dimension.length}, Ancho: ${this.dimension.width}, Altura: ${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Número de estantes: ${this.numberOfShelves}\n` +
      `Tiene cajones: ${this.hasDrawers ? "Sí" : "No"}`
    );
  }

  /**
   * Obtiene el nombre del rack.
   * @returns El nombre del rack.
   */
  getName(): string {
    return this.name;
  }
}
