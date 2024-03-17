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
    public hasDrawers: boolean,
  ) {}

  getInfo(): string {
    return (
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: Largo: ${this.dimension.length}, Ancho: ${this.dimension.width}, Altura: ${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Número de estantes: ${this.numberOfShelves}\n` +
      `Tiene cajones: ${this.hasDrawers ? "Sí" : "No"}`
    );
  }

  getName(): string {
    return this.name;
  }
}
