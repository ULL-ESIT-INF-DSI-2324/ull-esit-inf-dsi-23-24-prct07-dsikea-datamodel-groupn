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
    return (
      `Nombre: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}€\n` +
      `Número de piezas: ${this.numberOfPieces}`
    );
  }

  getName(): string {
    return this.name;
  }
}
