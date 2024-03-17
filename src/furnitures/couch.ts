import { furnitureInterface, Dimension } from "../furniture.js";

export class Couch implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public seatingCapacity: number,
    public hasRecliners: boolean,
  ) {}

  getInfo(): string {
    let info = `Nombre: ${this.name}\n`;
    info += `Descripción: ${this.description}\n`;
    info += `Material: ${this.material}\n`;
    info += `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n`;
    info += `Capacidad de asientos: ${this.seatingCapacity}\n`;
    info += `Tiene reclinatorios: ${this.hasRecliners ? "Sí" : "No"}\n`;
    info += `Precio: ${this.price}€\n`;
    return info;
  }

  getName(): string {
    return this.name;
  }
}
