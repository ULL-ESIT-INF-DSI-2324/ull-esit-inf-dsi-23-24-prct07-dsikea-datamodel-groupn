import { EntityInterface } from "./entities/EntityCollection.js";
import { Furniture, furnitureInterface } from "./furniture.js";

// Definimos un tipo para representar los tipos de transacción
type TransactionType = "Venta" | "Devolución Cliente" | "Compra" | "Devolución Proveedor";

// Definimos una clase para representar una transacción
export class Transaction<T extends furnitureInterface> {
  constructor(
    public entity: EntityInterface,
    public type: TransactionType,
    public date: Date,
    public furnitures: Furniture<T>,
    public total: number
  ) {}

  // Método para mostrar la información de la transacción
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