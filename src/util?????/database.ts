import lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import { Furniture, furnitureInterface } from "../furniture.js";
import {
  EntityCollection,
  EntityInterface,
} from "../entities/EntityCollection.js";
import { Transaction } from "../transaction.js";

// Definimos el tipo del esquema de la base de datos
type SchemaType = {
  catalogue: { furniture: Furniture<furnitureInterface>; amount: number };
  clients: EntityCollection<EntityInterface>;
  providers: EntityCollection<EntityInterface>;
};

class JsonTodoCollection extends Furniture<furnitureInterface> {
  private database: lowdb.LowdbSync<SchemaType>;
  private nextId: number = 1;
  protected itemMap = new Map<number, TodoItem>();

  constructor(
    public userName: string,
    todoItems: TodoItem[] = [],
  ) {
    super(userName, []);
    this.database = lowdb(new FileSync<SchemaType>("Schema.json"));
    if (!this.database.has("catalogue").value()) {
      this.database
        .defaults({
          catalogue: { furniture: {}, amount: 0 },
          clients: [],
          providers: [],
        })
        .write();
    }
    if (this.database.has("tasks").value()) {
      const dbItems = this.database.get("tasks").value();
      dbItems.forEach((item: { id: number; task: string; complete: boolean }) =>
        this.itemMap.set(
          item.id,
          new TodoItem(item.id, item.task, item.complete),
        ),
      );
      this.nextId =
        Math.max(...dbItems.map((item: { id: number }) => item.id)) + 1;
    } else {
      this.database.set("tasks", todoItems).write();
      todoItems.forEach((item) => this.itemMap.set(item.id, item));
    }
  }

  addTodo(task: string): number {
    const result = super.addTodo(task);
    this.storeTasks();
    return result;
  }

  markComplete(id: number, complete: boolean): void {
    super.markComplete(id, complete);
    this.storeTasks();
  }

  removeComplete(): void {
    super.removeComplete();
    this.storeTasks();
  }

  private storeTasks() {
    this.database.set("tasks", [...this.itemMap.values()]).write();
  }
}

class TodoItem {
  constructor(
    public id: number,
    public task: string,
    public complete: boolean = false,
  ) {}
}

export { JsonTodoCollection };
