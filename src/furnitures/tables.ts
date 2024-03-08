import { Dimension, furnitureInterface } from '../furniture';

export class Tables implements furnitureInterface {
  constructor(
    protected id: number,
    protected name: string,
    protected description: string,
    protected material: string,
    protected dimension: Dimension,
    protected price: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.material = material;
    this.dimension = dimension;
    this.price = price;
  }

  getName(): string {
    return this.name;
  }
}
