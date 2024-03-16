import { furnitureInterface, Dimension } from "../furniture.js";

export class Racks implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public numberOfShelves: number,
    public hasDrawers: boolean
  ) {}

  getInfo(): string {
    return this.description;
  }

  getName(): string {
    return this.name;
  }
}
