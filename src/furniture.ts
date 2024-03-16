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

export interface furnitureMap<T extends furnitureInterface> {
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
  getKey(id: number): furnitureInterface | undefined {
    for (const furniture of this.furnitureMap.values()) {
      if (furniture.id === id) {
        return furniture;
      } else {
        throw new Error("Furniture not found");
      }
    }
  }
  getFurniture(id: number): furnitureInterface | undefined{ //
    if (this.furnitureMap.get(id) === undefined) {
      throw new Error("Furniture not found");
    } else {
      return this.getKey(id); 
    }
  }
}

const furnitureMap = new Map<number, furnitureInterface>();
