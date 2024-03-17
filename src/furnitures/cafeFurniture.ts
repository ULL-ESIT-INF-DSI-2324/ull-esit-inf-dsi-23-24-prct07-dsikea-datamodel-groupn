import { furnitureInterface, Dimension } from "../furniture.js";

// Clase para Mesas y sillas de cafetería
export class cafeFurniture implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public tableShape: string,
  ) {}

  getInfo(): string {
    return (
      `Mueble para cafetería: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Forma de la mesa: ${this.tableShape}`
    );
  }

  getName(): string {
    return this.name;
  }
}
