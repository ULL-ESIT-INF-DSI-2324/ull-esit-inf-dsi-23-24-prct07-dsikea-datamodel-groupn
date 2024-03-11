import { furnitureInterface, Dimension } from "../furniture.js";

export class Closet implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.material = material;
    this.dimension = dimension;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }
}
