import { furnitureInterface, Dimension } from "../furniture.js";

export class Closet implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
  ) {}

  getInfo(): string {
    return `Descripción: ${this.description}\n`;
  }  

  getName(): string {
    return this.name;
  }
}
