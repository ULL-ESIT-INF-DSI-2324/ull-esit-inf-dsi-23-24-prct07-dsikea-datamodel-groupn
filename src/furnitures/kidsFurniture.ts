import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Muebles Infantiles.
 * Implementa la interfaz furnitureInterface.
 */
export class KidsFurniture implements furnitureInterface {
  /**
   * Constructor de la clase KidsFurniture.
   * @param id - Identificador único del mueble infantil.
   * @param name - Nombre del mueble infantil.
   * @param description - Descripción del mueble infantil.
   * @param material - Material del mueble infantil.
   * @param dimension - Dimensiones del mueble infantil.
   * @param price - Precio del mueble infantil.
   * @param ageRange - Rango de edad recomendado del mueble infantil.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public ageRange: string,
  ) {}

  /**
   * Obtiene la información detallada del mueble infantil.
   * @returns Una cadena con la información del mueble infantil.
   */
  getInfo(): string {
    return (
      `Nombre: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}€\n` +
      `Rango de edad: ${this.ageRange}`
    );
  }

  /**
   * Obtiene el nombre del mueble infantil.
   * @returns El nombre del mueble infantil.
   */
  getName(): string {
    return this.name;
  }
}
