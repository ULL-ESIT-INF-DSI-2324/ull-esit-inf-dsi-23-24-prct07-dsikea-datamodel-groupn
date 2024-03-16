import { furnitureInterface, Dimension } from "../furniture.js";

export class HighTable implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public tableShape: string,
    public numberOfSeats: number
  ) {}

  getInfo(): string {
    return this.description;
  }

  getName(): string {
    return this.name;
  }
}
