import { furnitureInterface, Dimension } from "../furniture.js";

export class Bureau implements furnitureInterface {
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

  getName(): string {
    return this.name;
  }
}
