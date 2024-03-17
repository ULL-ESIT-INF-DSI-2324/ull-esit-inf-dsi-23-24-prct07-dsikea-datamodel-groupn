import { furnitureInterface, Dimension } from "../furniture.js";

// Clase para Muebles infantiles
export class KidsFurniture implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public ageRange: string,
  ) {}

  getInfo(): string {
    return (
      `Nombre: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}€\n` +
      `Rango de edad: ${this.ageRange}`
    );
  }

  getName(): string {
    return this.name;
  }
}
