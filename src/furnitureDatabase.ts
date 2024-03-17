import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import { Furniture, furnitureInterface } from "./furniture.js";
import { Stock } from "./stock.js"

/**
 * Tipo del esquema de la base de datos
 */
type SchemaType = {
  furniture: Map<number, furnitureInterface>;
};

/**
 * Clase para gestionar el stock de muebles en un archivo JSON.
 * Extiende la clase Stock.
 */
export class JsonFurniture extends Furniture<furnitureInterface> {
  private database: lowdb.LowdbSync<SchemaType>;
  private nextId: number = 0;
  /**
   * Constructor de la clase JsonStock.
   * Inicializa la base de datos y carga los datos si existen.
   */
  constructor(public furnitureMap: Map<number, furnitureInterface>) {
    super(furnitureMap);
    this.database = lowdb(new FileSync("furniture.json"));
    if (this.database.has("furniture").value()) {
      this.furnitureMap = this.database.get("furniture").value();
    } else {
      this.database.set("furniture", this.furnitureMap).write();
    }
  }

  /**
   * Actualiza la base de datos con los cambios en el stock.
   */
  updateDatabase(): void {
    this.database.set("furniture", this.furnitureMap).write();
  }
}

// Uso:
const stock = new Stock();
const furns = new JsonFurniture(stock.catalogue.furnitureMap);
const furniture: furnitureInterface = {
  id: 1,
  name: "Silla",
  description: "Silla de madera",
  material: "Madera",
  dimension: { width: 0.5, height: 1, length: 0.5 },
  price: 100,
  getInfo: function () {
    return `${this.name}: ${this.description}, made of ${this.material}, dimensions: ${this.dimension.width}x${this.dimension.height}x${this.dimension.length}, price: ${this.price}`;
  },
  getName: function () {
    return this.name;
  },
};

furns.furnitureAdd(0, furniture);
furns.updateDatabase();
