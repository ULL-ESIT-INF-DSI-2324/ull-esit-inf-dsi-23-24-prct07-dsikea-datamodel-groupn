import { furnitureInterface, Dimension } from "../furniture.js";

// Clase para Muebles de gaming
export class GamingFurniture implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public consoleCompatibility: string[],
  ) {}

  getInfo(): string {
    return this.description;
  }

  getName(): string {
    return this.name;
  }
}
