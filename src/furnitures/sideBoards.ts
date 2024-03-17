import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Muebles de Bebé.
 * Implementa la interfaz furnitureInterface.
 */
export class BabyFurniture implements furnitureInterface {
  /**
   * Constructor de la clase BabyFurniture.
   * @param id - Identificador único del mueble de bebé.
   * @param name - Nombre del mueble de bebé.
   * @param description - Descripción del mueble de bebé.
   * @param material - Material del mueble de bebé.
   * @param dimension - Dimensiones del mueble de bebé.
   * @param price - Precio del mueble de bebé.
   * @param ageRange - Rango de edad recomendado para el mueble de bebé.
   * @param hasChangingTable - Indica si el mueble de bebé tiene mesa de cambio.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public ageRange: string,
    public hasChangingTable: boolean,
  ) {}

  /**
   * Obtiene la información detallada del mueble de bebé.
   * @returns Una cadena con la información del mueble de bebé.
   */
  getInfo(): string {
    return (
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: Largo: ${this.dimension.length}, Ancho: ${this.dimension.width}, Altura: ${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Rango de edad recomendado: ${this.ageRange}\n` +
      `Tiene mesa de cambio: ${this.hasChangingTable ? "Sí" : "No"}`
    );
  }

  /**
   * Obtiene el nombre del mueble de bebé.
   * @returns El nombre del mueble de bebé.
   */
  getName(): string {
    return this.name;
  }
}
