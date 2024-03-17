import { furnitureInterface, Dimension } from "../furniture.js";

export class BabyFurniture implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public ageRange: string,
    public hasChangingTable: boolean,
  ) {}

  getInfo(): string {
    return (
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: Largo: ${this.dimension.length}, Ancho: ${this.dimension.width}, Altura: ${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Rango de edad recomendado: ${this.ageRange}\n` +
      `Tiene mesa de cambio: ${this.hasChangingTable ? "Sí" : "No"}`
    );
  }

  getName(): string {
    return this.name;
  }
}
