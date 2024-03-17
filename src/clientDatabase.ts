import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import { EntityCollection , EntityInterface} from "./entities/EntityCollection.js";

/**
 * Tipo del esquema de la base de datos
 */
type SchemaType = {
  clients: Map<number, EntityInterface>;
};

/**
 * Clase para gestionar el stock de muebles en un archivo JSON.
 * Extiende la clase Stock.
 */
export class JsonClient extends EntityCollection<EntityInterface> {
  private database: lowdb.LowdbSync<SchemaType>;
  private nextId: number = 0;
  /**
   * Constructor de la clase JsonStock.
   * Inicializa la base de datos y carga los datos si existen.
   */
  constructor(public entityMap: Map<number, EntityInterface>) {
    super(entityMap);
    this.database = lowdb(new FileSync("client.json"));
    if (this.database.has("clients") ) {
      const data = this.database.get("clients").value();
      if (data !== undefined) {
        data.forEach(item => {
        if (item !== null) {
          this.entityMap.set(item.id, item);
        }
      });
      }
    } else {
      this.database.set("clients", entityMap).write();
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
    this.database.set("clients", [...this.entityMap.values()]).write();
  }
}

// probando base de datos para clientes.

const clients = new Map();
const client : EntityInterface = {
  id: 1,
  name: "Juan",
  contact: "pollon",
  direction: "calle falsa 123",
};

const clientDatabase = new JsonClient(clients);
console.log(clientDatabase.entityMap);
clientDatabase.add(client);
clientDatabase.storeClient();



