import {
  EntityCollection,
  EntityInterface,
} from "./entities/EntityCollection.js";
import { Furniture, furnitureInterface } from "./furniture.js";
// import {
//   EntityCollection,
//   EntityInterface,
// } from "./entities/EntityCollection.js";
import { Transaction } from "./transaction.js";

export class Stock {
  private inventory: Map<number, number>; // Mapa para almacenar la cantidad de cada mueble
  private transactions: Transaction<furnitureInterface>[]; // Array para almacenar las transacciones

  constructor(private entityCollection: EntityCollection<EntityInterface>) {
    this.inventory = new Map<number, number>();
    this.transactions = [];
  }

  // Método para agregar productos al inventario
  addProduct(product: furnitureInterface, quantity: number): void {
    this.inventory.set(product.id, quantity);
  }

  // Método para vender una cantidad de productos a un cliente
  sellProduct(
    client: EntityInterface,
    products: Furniture<furnitureInterface>,
  ): Transaction<furnitureInterface> | undefined {
    let total: number = 0;
    for (const product of products) {
      //Por cada producto que se quiera vender, comprobar la id equivalente y restar la cantidad si es posible.
      // Si no hay stock, terminar la operación.

      let currentQuantity = this.inventory.get(product.id) || 0;
      --currentQuantity;
      if (currentQuantity < 0) {
        console.log(
          `No hay suficiente stock de las unidades de ${product.name}`,
        );
        return undefined;
      }
      this.inventory.set(product.id, currentQuantity);
      total += currentQuantity * product.price;
    }
    const saleTransaction = new Transaction(
      client,
      "Venta",
      new Date(),
      products,
      total,
    );
    this.transactions.push(saleTransaction);
    return saleTransaction;
  }

  // Método para registrar una compra a un proveedor
  purchaseProduct(
    provider: EntityInterface,
    products: Furniture<furnitureInterface>,
    totalPrice: number,
  ): Transaction<furnitureInterface> {
    for (const product of products) {
      //Por cada producto que se quiera comprar, comprobar la id equivalente y sumar a la cantidad.
      let currentQuantity = this.inventory.get(product.id) || 0;
      this.inventory.set(product.id, ++currentQuantity);
    }
    const purchaseTransaction = new Transaction(
      provider,
      "Compra",
      new Date(),
      products,
      totalPrice,
    );
    this.transactions.push(purchaseTransaction);
    return purchaseTransaction;
  }

  // Métodos para obtener informes

  // Obtener el stock disponible de un mueble específico
  getStockForFurniture(furnitureId: number): number {
    return this.inventory.get(furnitureId) || 0;
  }

  // Obtener el stock disponible de una categoría de muebles
  getStockForCategory(category: string): number {
    let totalStock = 0;
    for (const [productId, quantity] of this.inventory.entries()) {
      const product = this.entityCollection.get(productId);
      if (product && product.category === category) {
        totalStock += quantity;
      }
    }
    return totalStock;
  }

  // Obtener el mueble más vendido
  getMostSoldFurniture(): Furniture<furnitureInterface> | undefined {
    // Implementa esto pls, el que sea
  }

  // Obtener la facturación total por ventas a clientes en un periodo de tiempo
  getRevenueForClientSales(startDate: Date, endDate: Date): number {
    let totalRevenue = 0;
    for (const transaction of this.transactions) {
      if (
        transaction.type === "Venta" &&
        startDate <= transaction.date &&
        transaction.date <= endDate
      ) {
        totalRevenue += transaction.total;
      }
    }
    return totalRevenue;
  }

  // Obtener el gasto total por compras a proveedores en un periodo de tiempo
  getExpenseForProviderPurchases(startDate: Date, endDate: Date): number {
    let totalExpense = 0;
    for (const transaction of this.transactions) {
      if (
        transaction.type === "Compra" &&
        startDate <= transaction.date &&
        transaction.date <= endDate
      ) {
        totalExpense += transaction.total;
      }
    }
    return totalExpense;
  }

  // Obtener el histórico de ventas de un cliente específico
  getSalesHistoryForClient(
    clientId: number,
  ): Transaction<furnitureInterface>[] {
    return this.transactions.filter(
      (transaction) =>
        transaction.type === "Venta" && transaction.entity.id === clientId,
    );
  }

  // Obtener el histórico de compras a un proveedor específico
  getPurchasesHistoryForProvider(
    providerId: number,
  ): Transaction<furnitureInterface>[] {
    return this.transactions.filter(
      (transaction) =>
        transaction.type === "Compra" && transaction.entity.id === providerId,
    );
  }
}
