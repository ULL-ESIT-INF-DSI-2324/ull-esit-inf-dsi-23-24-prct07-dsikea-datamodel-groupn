import { furnitureInterface, Dimension } from "../furniture.js";

export class auxiliaryCars implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public capacity: number,
  ) {}

  getInfo(): string {
    return (
      `Carro auxiliar: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Capacidad: ${this.capacity} kg`
    );
  }

  getName(): string {
    return this.name;
  }
}
