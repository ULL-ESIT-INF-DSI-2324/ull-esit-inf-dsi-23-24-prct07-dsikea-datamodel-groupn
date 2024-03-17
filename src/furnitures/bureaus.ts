import { furnitureInterface, Dimension } from "../furniture.js";

/**
 * Clase que representa un Escritorio.
 * Implementa la interfaz furnitureInterface.
 */
export class Bureau implements furnitureInterface {
  /**
   * Constructor de la clase Bureau.
   * @param id - Identificador único del escritorio.
   * @param name - Nombre del escritorio.
   * @param description - Descripción del escritorio.
   * @param material - Material del escritorio.
   * @param dimension - Dimensiones del escritorio.
   * @param price - Precio del escritorio.
   * @param numberOfDrawers - Número de cajones del escritorio.
   * @param hasMirror - Indica si el escritorio tiene espejo o no.
   */
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public numberOfDrawers: number,
    public hasMirror: boolean,
  ) {}

  /**
   * Obtiene la información detallada del escritorio.
   * @returns Una cadena con la información del escritorio.
   */
  getInfo(): string {
    const mirrorInfo = this.hasMirror ? "Con espejo" : "Sin espejo";
    return (
      `Escritorio: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Número de cajones: ${this.numberOfDrawers}\n` +
      `${mirrorInfo}`
    );
  }

  /**
   * Obtiene el nombre del escritorio.
   * @returns El nombre del escritorio.
   */
  getName(): string {
    return this.name;
  }
}
