import { furnitureInterface, Dimension } from "../furniture.js";

export class Armchair implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public seatingCapacity: number,
    public hasArmrests: boolean,
  ) {}

  getInfo(): string {
    return (
      `Silla: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Capacidad de asientos: ${this.seatingCapacity}\n` +
      `Reposabrazos: ${this.hasArmrests ? "Sí" : "No"}`
    );
  }

  getName(): string {
    return this.name;
  }
}
