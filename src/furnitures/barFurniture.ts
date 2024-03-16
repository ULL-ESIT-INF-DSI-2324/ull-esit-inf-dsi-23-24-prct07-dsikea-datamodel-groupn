import { furnitureInterface, Dimension } from "../furniture.js";

// Clase para Mesas altas y taburetes
export class barFurniture implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public seatMaterial: string,
  ) {}

  getInfo(): string {
    return this.description;
  }

  getName(): string {
    return this.name;
  }
}
