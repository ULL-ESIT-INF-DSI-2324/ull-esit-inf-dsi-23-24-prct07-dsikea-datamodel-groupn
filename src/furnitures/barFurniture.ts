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
    return (
      `Mueble para bar: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Material del asiento: ${this.seatMaterial}`
    );
  }

  getName(): string {
    return this.name;
  }
}
