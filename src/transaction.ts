import { EntityInterface } from "./entities/EntityCollection.js";
import { Furniture, furnitureInterface } from "./furniture.js";

/**
 * Definimos un tipo para representar los tipos de transacción.
 */
type TransactionType = "Venta" | "Compra";

/**
 * Clase para representar una transacción.
 */
export class Transaction<T extends furnitureInterface> {
  /**
   * @param entity - La entidad relacionada con la transacción (cliente/proveedor).
   * @param type - El tipo de transacción (Venta/Compra).
   * @param date - La fecha de la transacción.
   * @param furnitures - Los muebles involucrados en la transacción.
   * @param total - El importe total de la transacción.
   */
  constructor(
    public entity: EntityInterface,
    public type: TransactionType,
    public date: Date,
    public furnitures: Furniture<T>,
    public total: number,
  ) {}

  /**
   * Método para mostrar la información de la transacción por consola.
   */
  displayInfo() {
    console.log(`Entidad: ${this.entity.name}`);
    console.log(`Tipo de transacción: ${this.type}`);
    console.log(`Fecha: ${this.date}`);
    console.log("Muebles involucrados:");
    let counter: number = 0;
    for (const furniture of this.furnitures) {
      console.log(`  ${++counter}. ${furniture.getName()}`);
    }
    console.log(`Importe total: ${this.total}`);
  }
}
