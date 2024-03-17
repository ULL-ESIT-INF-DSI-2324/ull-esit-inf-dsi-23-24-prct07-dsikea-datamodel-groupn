import { furnitureInterface, Dimension } from "../furniture.js";

export class DiningRoomFurniture implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public numberOfSeats: number,
    public tableShape: string,
  ) {}

  getInfo(): string {
    return (
      `Nombre: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}€\n` +
      `Número de asientos: ${this.numberOfSeats}\n` +
      `Forma de la mesa: ${this.tableShape}\n`
    );
  }

  getName(): string {
    return this.name;
  }
}
