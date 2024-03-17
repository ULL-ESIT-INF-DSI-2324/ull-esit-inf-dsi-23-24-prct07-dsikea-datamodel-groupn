import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Mesas altas y taburetes.
 * Implementa la interfaz furnitureInterface.
 */
export class BarFurniture implements furnitureInterface {
  /**
   * Constructor de la clase BarFurniture.
   * @param id - Identificador único del mueble para bar.
   * @param name - Nombre del mueble para bar.
   * @param description - Descripción del mueble para bar.
   * @param material - Material del mueble para bar.
   * @param dimension - Dimensiones del mueble para bar.
   * @param price - Precio del mueble para bar.
   * @param seatMaterial - Material del asiento del mueble para bar.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public seatMaterial: string,
  ) {}

  /**
   * Obtiene la información detallada del mueble para bar.
   * @returns Una cadena con la información del mueble para bar.
   */
  getInfo(): string {
    return (
      `Mueble para bar: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Material del asiento: ${this.seatMaterial}`
    );
  }

  /**
   * Obtiene el nombre del mueble para bar.
   * @returns El nombre del mueble para bar.
   */
  getName(): string {
    return this.name;
  }
}
