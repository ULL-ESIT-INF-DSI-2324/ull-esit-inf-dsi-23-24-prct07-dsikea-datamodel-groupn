import { furnitureInterface, Dimension } from "../furniture.js";

// Clase para Conjuntos de muebles
export class furnitureSet implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public numberOfPieces: number,
  ) {}

  getInfo(): string {
    return this.description;
  }

  getName(): string {
    return this.name;
  }
}
