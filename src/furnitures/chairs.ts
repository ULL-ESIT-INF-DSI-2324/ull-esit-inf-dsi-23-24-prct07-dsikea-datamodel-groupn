import { Dimension, furnitureInterface } from "../furniture.js";
export class Chair implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
  ) {}

  getInfo(): string {
    return (
      `Silla: ${this.name}\n` +
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: ${this.dimension.length}x${this.dimension.width}x${this.dimension.height}\n` +
      `Precio: ${this.price}`
    );
  }

  getName(): string {
    return this.name;
  }
}
