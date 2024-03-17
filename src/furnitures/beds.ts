import { furnitureInterface, Dimension } from "../furniture.js";

export class Bed implements furnitureInterface {
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

  getName(): string {
    return this.name;
  }
}
