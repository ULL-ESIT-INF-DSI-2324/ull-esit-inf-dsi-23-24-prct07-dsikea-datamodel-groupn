import { furnitureInterface, Dimension } from "../furniture.js";

// Clase para Separadores de ambientes
export class roomDivider implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public style: string,
  ) {}

  getInfo(): string {
    return (
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: Largo: ${this.dimension.length}, Ancho: ${this.dimension.width}, Altura: ${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `Estilo: ${this.style}`
    );
  }

  getName(): string {
    return this.name;
  }
}
