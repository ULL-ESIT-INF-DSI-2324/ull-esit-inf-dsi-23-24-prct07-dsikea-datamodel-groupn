import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import { Furniture, furnitureInterface } from "./furniture.js";
import { EntityCollection, EntityInterface } from "./entities/EntityCollection.js";
import { Transaction } from "./transaction.js";
import { Stock } from "./stock.js";

// Definimos el tipo del esquema de la base de datos
type SchemaType = {
  inventory: Map<number, number>;
  trans: Transaction<furnitureInterface>[];
  clients: EntityCollection<EntityInterface>;
  providers: EntityCollection<EntityInterface>;
  furniture: Furniture<furnitureInterface>;
};

export class JsonStock extends Stock {
    private database: lowdb.LowdbSync<SchemaType>;
    private nextId: number = 0;
  
    constructor() {
      super();
      this.database = lowdb(new FileSync("Stock.json"));
      if (this.database.has("inventory").value())  {        
        this.inventory = this.database.get("inventory").value();
        this.transactions = this.database.get("trans").value();
        this.catalogue = this.database.get("furniture").value();
      } else {
          const entrada: SchemaType = {
            inventory: this.inventory,
            trans: this.transactions,
            clients: new EntityCollection<EntityInterface>(new Map<number, EntityInterface>()),
            providers: new EntityCollection<EntityInterface>(new Map<number, EntityInterface>()),
            furniture: new  Furniture<furnitureInterface>(new Map<number, furnitureInterface>())
          };
    
          this.database.set("stock", entrada)
          .write();
      }
    }

    updateDatabase(): void {
      const entrada: SchemaType = {
        inventory: this.inventory,
        trans: this.transactions,
        clients: this.clients,
        providers: this.providers,
        furniture: this.catalogue
      };   
      this.database.set("inventory", entrada.inventory)
                   .set("trans", entrada.trans)
                   .set("clients", entrada.clients)
                   .set("providers", entrada.providers)
                   .set("furniture", entrada.furniture)
                   .write();
    }
  }
const stock = new JsonStock();
const furniture :furnitureInterface = {
  id: 1, 
  name: "Silla", 
  description: "Silla de madera", 
  material: "Madera", 
  dimension: {width: 0.5, height: 1, length: 0.5}, 
  price: 100,
  getInfo: function() {
    return `${this.name}: ${this.description}, made of ${this.material}, dimensions: ${this.dimension.width}x${this.dimension.height}x${this.dimension.length}, price: ${this.price}`;
  },
  getName: function() {
    return this.name;
  }
};

stock.addProduct(furniture, 100);

stock.updateDatabase();