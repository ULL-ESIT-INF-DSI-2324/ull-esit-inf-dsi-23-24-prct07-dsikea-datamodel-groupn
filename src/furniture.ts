import { Closet } from "./furnitures/closet.js";
import { Tables } from "./furnitures/tables.js";

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
  getName(): string;
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

  // searchFurnitureById(id: number): T | undefined {
  //   return this.furnitureMap.get(id);
  // }

  // buscarMueblePorAtributo(atributo: keyof furnitureInterface, valor: searchValue): furnitureInterface | undefined {
  //   return Array.from(this.furnitureMap.values()).find(element => element[atributo] === valor);
  // }

  [Symbol.iterator](): IterableIterator<T> {
    return this.furnitureMap.values();
  }
}

// export class Chair implements furnitureInterface {

//     constructor(protected: id, protected: name, protected: description, protected: material, protected: dimension) {
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.material = material;
//         this.dimension = dimension;
//     }
// }
const clos = new Closet(1, "Closet", "Closet de madera", "Madera", { length: 1, width: 1, height: 1 }, 100);
//ID único.
const furniture = new Furniture( new Map([[clos.id, clos]]));

const table = new Tables(2, "Table", "Table de madera", "Madera", { length: 1, width: 1, height: 1 }, 100);

furniture.furnitureMap.set(table.id, table);


console.log(furniture.furnitureMap);
console.log("Iterating over furniture");
//Nombre.
//Descripción.
//Material.
//Dimensiones.
//Precio.
