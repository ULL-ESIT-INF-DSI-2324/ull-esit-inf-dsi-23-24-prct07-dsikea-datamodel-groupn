import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import { EntityCollection , EntityInterface} from "./entities/EntityCollection.js";

/**
 * Tipo del esquema de la base de datos
 */
type SchemaType = {
  providers: Map<number, EntityInterface>;
};

/**
 * Clase para gestionar el stock de muebles en un archivo JSON.
 * Extiende la clase Stock.
 */
export class JsonProvider extends EntityCollection<EntityInterface> {
  private database: lowdb.LowdbSync<SchemaType>;
  private nextId: number = 0;
  /**
   * Constructor de la clase JsonStock.
   * Inicializa la base de datos y carga los datos si existen.
   */
  constructor(public entityMap: Map<number, EntityInterface>) {
    super(entityMap);
    this.database = lowdb(new FileSync("provider.json"));
    if (this.database.has("providers") ) {
      const data = this.database.get("providers").value();
      if (data !== undefined) {
        data.forEach(item => {
        if (item !== null) {
          this.entityMap.set(item.id, item);
        }
      });
      }
    } else {
      this.database.set("providers", entityMap).write();
      entityMap.forEach(item => this.entityMap.set(item.id,item));
    }
  }

  /**
   * 
   * Actualiza la base de datos con los cambios en el stock.
   */
  add(client: EntityInterface): void {
    super.add(client);
  }
  storeClient(){
    this.database.set("providers", [...this.entityMap.values()]).write();
  }
}

//probando base de datos para los providers.