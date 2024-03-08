export interface clientInterface {
  id: number;
  name: string;
  contact: string;
  direction: string;
}

export interface clientMap<T> {
  /**
   * Mapa que contiene los proveedores.
   */
  clientMap: Map<number, T>;
}

export abstract class client<T extends clientInterface>
  implements clientMap<T>, Iterable<T>
{
  constructor(public clientMap: Map<number, T>) {}

  [Symbol.iterator](): IterableIterator<T> {
    return this.clientMap.values();
  }
}
