import { furnitureInterface, Dimension } from "../furniture.js";

export class livingRoomFurniture implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public hasArmchairs: boolean,
    public hasCoffeeTable: boolean,
  ) {}

  getInfo(): string {
    return (
      `Nombre: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}€\n` +
      `¿Tiene sillones? ${this.hasArmchairs ? "Sí" : "No"}\n` +
      `¿Tiene mesa de café? ${this.hasCoffeeTable ? "Sí" : "No"}`
    );
  }

  getName(): string {
    return this.name;
  }
}
