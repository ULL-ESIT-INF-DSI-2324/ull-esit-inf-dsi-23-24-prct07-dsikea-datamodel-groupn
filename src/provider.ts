export interface providerInterface {
  id: number;
  name: string;
  contact: string;
  direction: string;
}

export interface providerMap<T> {
  /**
   * Mapa que contiene los proveedores.
   */
  providerMap: Map<number, T>;
}

export abstract class Provider<T extends providerInterface>
  implements providerMap<T>, Iterable<T>
{
  constructor(public providerMap: Map<number, T>) {}

  [Symbol.iterator](): IterableIterator<T> {
    return this.providerMap.values();
  }
}
