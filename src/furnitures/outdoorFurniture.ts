import { furnitureInterface, Dimension } from "../furniture.js";

// Clase para Muebles de exterior para jardín y terraza

//que estas tocando??? los getinfo, poniendolos bien
export class outdoorFurniture implements furnitureInterface {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public material: string,
    public dimension: Dimension,
    public price: number,
    public weatherproof: boolean,
  ) {}

  getInfo(): string {
    return (
      `Descripción: ${this.description}\n` +
      `Material: ${this.material}\n` +
      `Dimensiones: Largo: ${this.dimension.length}, Ancho: ${this.dimension.width}, Altura: ${this.dimension.height}\n` +
      `Precio: ${this.price}\n` +
      `A prueba de mal tiempo: ${this.weatherproof ? "Sí" : "No"}`
    );
  }

  getName(): string {
    return this.name;
  }
}
