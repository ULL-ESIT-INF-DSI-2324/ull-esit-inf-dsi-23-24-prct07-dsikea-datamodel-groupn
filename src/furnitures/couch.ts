import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase para Sofás.
 * Implementa la interfaz furnitureInterface.
 */
export class Couch implements furnitureInterface {
  /**
   * Constructor de la clase Couch.
   * @param id - Identificador único del sofá.
   * @param name - Nombre del sofá.
   * @param description - Descripción del sofá.
   * @param material - Material del sofá.
   * @param dimension - Dimensiones del sofá.
   * @param price - Precio del sofá.
   * @param seatingCapacity - Capacidad de asientos del sofá.
   * @param hasRecliners - Indica si el sofá tiene reclinatorios o no.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public seatingCapacity: number,
    public hasRecliners: boolean,
  ) {}

  /**
   * Obtiene la información detallada del sofá.
   * @returns Una cadena con la información del sofá.
   */
  getInfo(): string {
    let info = `Nombre: ${this.name}\n`;
    info += `Descripción: ${this.description}\n`;
    info += `Material: ${this.material}\n`;
    info += `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n`;
    info += `Capacidad de asientos: ${this.seatingCapacity}\n`;
    info += `Tiene reclinatorios: ${this.hasRecliners ? "Sí" : "No"}\n`;
    info += `Precio: ${this.price}€\n`;
    return info;
  }

  /**
   * Obtiene el nombre del sofá.
   * @returns El nombre del sofá.
   */
  getName(): string {
    return this.name;
  }
}
