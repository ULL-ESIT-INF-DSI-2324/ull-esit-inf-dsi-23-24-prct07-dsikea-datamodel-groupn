export type Dimension = {
  length: number;
  width: number;
  height: number;
};

// type searchValue = number | string;

export interface furnitureInterface {
  id: number;
  name: string;
  description: string;
  material: string;
  dimension: Dimension;
  price: number;
  getInfo():string;
  getName():string;
}

export interface furnitureMap<T> {
  /**
   * Mapa que contiene los muebles.
   */
  furnitureMap: Map<number, T>;
}

export class Furniture<T extends furnitureInterface>
  implements furnitureMap<T>, Iterable<T>
{
  constructor(public furnitureMap: Map<number, T>) {}

  [Symbol.iterator](): IterableIterator<T> {
    return this.furnitureMap.values();
  }

  furnitureAdd(furniture: T): void {
    this.furnitureMap.set(furniture.id, furniture);
  }
}

const furnitureMap = new Map<number, furnitureInterface>();

