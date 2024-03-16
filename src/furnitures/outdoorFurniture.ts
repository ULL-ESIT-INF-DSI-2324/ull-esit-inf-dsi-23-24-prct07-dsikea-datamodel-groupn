import { furnitureInterface, Dimension } from "../furniture.js";

// Clase para Muebles de exterior para jardín y terraza
export class outdoorFurniture implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public weatherproof: boolean,
  ) {}

  getInfo(): string {
    return this.description;
  }

  getName(): string {
    return this.name;
  }
}
