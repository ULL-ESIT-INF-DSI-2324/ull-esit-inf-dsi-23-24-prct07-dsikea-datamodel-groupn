
interface FurnitureMap<T> {
    /**
     * Mapa que contiene los muebles.
     */
    furnitureMap: Map<number, T>;
}

type Dimension = {
  length: number;
  width: number;
  height: number;
};

type searchValue = number | string;

interface FurnitureMap<T> {
    /**
     * Mapa que contiene los muebles.
     */
    furnitureMap: Map<number, T>;
}

interface furnitureInterface {
  id: number;
  name: string;
  description: string;
  material: string;
  dimension: Dimension;
  getName(): string;
}

export abstract class Furniture<T extends furnitureInterface> implements FurnitureMap<T>, Iterable<T> {

  constructor(public furnitureMap: Map<number, T>) {}

  searchFurnitureById(id: number): T | undefined {
    return this.furnitureMap.get(id);
  }

  buscarMueblePorAtributo(atributo: keyof furnitureInterface, valor: searchValue): furnitureInterface | undefined {
    
    return this.furniture.find(Element => Element[atributo] === valor);
  }

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

//ID único.
//Nombre.
//Descripción.
//Material.
//Dimensiones.
//Precio.
