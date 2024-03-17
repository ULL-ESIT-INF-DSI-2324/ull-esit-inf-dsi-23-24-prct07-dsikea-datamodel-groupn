import {
  EntityInterface, EntityCollection
} from "./entities/EntityCollection.js";
import { Furniture, furnitureInterface } from "./furniture.js";
import { Transaction } from "./transaction.js";

export class Stock {
  public inventory: Map<number, number>; // Mapa para almacenar la cantidad de cada mueble
  public catalogue: Furniture<furnitureInterface>;
  public transactions: Transaction<furnitureInterface>[]; // Array para almacenar las transacciones
  public clients: EntityCollection<EntityInterface>;
  public providers: EntityCollection<EntityInterface>;

  constructor() {
    this.inventory = new Map<number, number>();
    this.catalogue = new Furniture<furnitureInterface>(
      new Map<number, furnitureInterface>(),
    );
    this.transactions = [];
    this.clients = new EntityCollection<EntityInterface>(new Map<number, EntityInterface>());
    this.providers = new EntityCollection<EntityInterface>(new Map<number, EntityInterface>());
  }

  // Método para agregar productos al catálogo e inventario
  addProduct(product: furnitureInterface, quantity: number): void {
    // Agregar el producto al catálogo
    //if (this.catalogue.getKey(product.id) !== undefined) {
      //const currentQuantity = this.inventory.get(product.id) || 0;
      //this.inventory.set(product.id, currentQuantity + quantity);
    //} else {
      this.catalogue.furnitureAdd(product.id, product);
      const currentQuantity = this.inventory.get(product.id) || 0;
      this.inventory.set(product.id, currentQuantity + quantity);
    //}
  }

  // Método para vender una cantidad de productos a un cliente
  sellProduct(
    client: EntityInterface,
    products: Furniture<furnitureInterface>,
  ): Transaction<furnitureInterface> | undefined {
    let total: number = 0;
    for (const product of products) {
      // Por cada producto que se quiera vender, comprobar la existencia y restar la cantidad si es posible.
      const currentQuantity = this.inventory.get(product.id) || 0;
      if (currentQuantity < 1) {
        console.log(
          `No hay suficiente stock de las unidades de ${product.name}`,
        );
        return undefined;
      }

      // Actualizar la cantidad en el inventario
      this.inventory.set(product.id, currentQuantity - 1);
      total += product.price;
    }

    // Crear la transacción de venta
    const saleTransaction = new Transaction(
      client,
      "Venta",
      new Date(),
      products,
      total,
    );
    this.clients.entityMap.set(client.id, client);
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
  // getStockForCategory(category: string): number {
  //   let totalStock = 0;
  //   for (const [id, quantity] of this.inventory.entries()) {
  //     const furniture = this.catalogue.getFurniture(id);
  //     if (furniture && furniture.category === category) {
  //       totalStock += quantity;
  //     }
  //   }
  //   return totalStock;
  // }

  // Obtener el mueble más vendido. Porfa bssssssss
  getMostSoldFurniture(): furnitureInterface | undefined {
    let mostSoldFurniture: furnitureInterface | undefined = undefined;
    let maxQuantitySold = 0;

    for (const [id, quantity] of this.inventory.entries()) {
      const furniture = this.catalogue.getFurniture(id);
      if (furniture && quantity > maxQuantitySold) {
        maxQuantitySold = quantity;
        mostSoldFurniture = furniture;
      }
    }

    return mostSoldFurniture;
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
