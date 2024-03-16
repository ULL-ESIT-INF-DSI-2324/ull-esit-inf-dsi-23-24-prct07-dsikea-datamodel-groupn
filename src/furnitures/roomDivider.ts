import { furnitureInterface, Dimension } from "../furniture.js";

// Clase para Separadores de ambientes
export class roomDivider implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public style: string,
  ) {}

  getInfo(): string {
    return this.description;
  }

  getName(): string {
    return this.name;
  }
}
