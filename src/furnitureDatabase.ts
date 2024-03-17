import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import { Furniture, furnitureInterface } from "./furniture.js";

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
    if (this.database.has("furniture") ) {
      const data = this.database.get("furniture").value();
      
      if (data !== undefined) {
        data.forEach(item => {
        if (item !== null) {
          this.furnitureMap.set(item.id, item);
        }
      });
      }
    } else {
      this.database.set("furniture", furnitureMap).write();
      furnitureMap.forEach(item => this.furnitureMap.set(item.id,item));
    }
  }

  /**
   * 
   * Actualiza la base de datos con los cambios en el stock.
   */
  furnitureAdd(id: number, furniture: furnitureInterface): void {
    super.furnitureAdd(id, furniture);
  }
  storeFurniture(){
    this.database.set("furniture", [...this.furnitureMap.values()]).write();
  }
}

