import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import { Furniture, furnitureInterface } from "./furniture.js";
import {
  EntityCollection,
  EntityInterface,
} from "./entities/EntityCollection.js";
import { Transaction } from "./transaction.js";
import { Stock } from "./stock.js";

/**
 * Tipo del esquema de la base de datos
 */
type SchemaType = {
  inventory: Map<number, number>;
  trans: Transaction<furnitureInterface>[];
  clients: EntityCollection<EntityInterface>;
  providers: EntityCollection<EntityInterface>;
  furniture: Furniture<furnitureInterface>;
};

/**
 * Clase para gestionar el stock de muebles en un archivo JSON.
 * Extiende la clase Stock.
 */
export class JsonStock extends Stock {
  private database: lowdb.LowdbSync<SchemaType>;
  private nextId: number = 0;
  /**
   * Constructor de la clase JsonStock.
   * Inicializa la base de datos y carga los datos si existen.
   */
  constructor() {
    super();
    this.database = lowdb(new FileSync("Stock.json"));
    if (this.database.has("inventory").value()) {

      this.inventory = this.database.get("inventory").value();
      this.transactions = this.database.get("trans").value();
      this.clients = this.database.get("clients").value();
      this.providers = this.database.get("providers").value();
      this.catalogue = new Furniture(new Map());
      //¡this.catalogue = this.database.get("furniture").value();
      this.inventory = new Map(); // Asegúrate de que esto es correcto para tu caso
      // this.catalogue = this.database.get("furniture").value();
    } else {
      const entrada: SchemaType = {
        inventory: this.inventory,
        trans: this.transactions,
        clients: this.clients,
        providers: this.providers,
        furniture: this.catalogue,
      };
  
      this.database.set("inventory", entrada.inventory)
      .set("trans", entrada.trans)
      .set("clients", entrada.clients)
      .set("providers", entrada.providers)
      .set("catalogue", entrada.furniture).write();

    }
  }
  
  addProduct(product: furnitureInterface, quantity: number): void {
    // Agregar el producto al catálogo
    //if (this.catalogue.getKey(product.id) !== undefined) {
    //const currentQuantity = this.inventory.get(product.id) || 0;
    //this.inventory.set(product.id, currentQuantity + quantity);
    //} else {
      if (!this.catalogue) {
        this.catalogue = new Furniture(new Map());
    }
    this.catalogue.furnitureAdd(quantity, product);
    const currentQuantity = this.inventory.get(product.id) || 0;
    this.inventory.set(product.id, currentQuantity + quantity);
    //}
  }

  /**
   * Actualiza la base de datos con los cambios en el stock.
   */
  updateDatabase(): void {
    const entrada: SchemaType = {
      inventory: this.inventory,
      trans: this.transactions,
      clients: this.clients,
      providers: this.providers,
      furniture: this.catalogue,
    };
    this.database
      .set("inventory", entrada.inventory)
      .set("trans", entrada.trans)
      .set("clients", entrada.clients)
      .set("providers", entrada.providers)
      .set("furniture", entrada.furniture)
      .write();
  }
}

// Uso:
const stock = new JsonStock();
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

stock.addProduct(furniture, 100);

stock.updateDatabase();
