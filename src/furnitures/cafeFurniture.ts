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
    return this.description;
  }

  getName(): string {
    return this.name;
  }
}
