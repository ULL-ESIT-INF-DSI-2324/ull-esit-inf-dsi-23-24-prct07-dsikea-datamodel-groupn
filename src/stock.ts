import {
  EntityInterface,
  EntityCollection,
} from "./entities/EntityCollection.js";
//import { JsonFurniture } from "./furnitureDatabase.js"
import { Furniture, furnitureInterface } from "./furniture.js";
import { Transaction } from "./transaction.js";

/**
 * Clase que representa el inventario de muebles y gestiona las transacciones relacionadas.
 */
export class Stock {
  /**
   * Mapa para almacenar la cantidad de cada mueble en el inventario.
   */
  public inventory: Map<number, number>;

  /**
   * Colección de muebles disponible en el catálogo.
   */
  public catalogue: Furniture<furnitureInterface>;

  /**
   * Array para almacenar las transacciones realizadas.
   */
  public transactions: Transaction<furnitureInterface>[];

  /**
   * Colección de clientes.
   */
  public clients: EntityCollection<EntityInterface>;

  /**
   * Colección de proveedores.
   */
  public providers: EntityCollection<EntityInterface>;

  /**
   * Constructor de la clase Stock.
   */
  //public datFurn: JsonFurniture;
  constructor() {
    this.inventory = new Map<number, number>();
    this.catalogue = new Furniture<furnitureInterface>(
      new Map<number, furnitureInterface>(),
    );
    this.transactions = [];
    this.clients = new EntityCollection<EntityInterface>(
      new Map<number, EntityInterface>(),
    );
    this.providers = new EntityCollection<EntityInterface>(
      new Map<number, EntityInterface>(),
    );
    //this.datFurn = new JsonFurniture(this.catalogue.furnitureMap);
  }

  /**
   * Método para agregar productos al catálogo e inventario.
   * @param product - Mueble a agregar.
   * @param quantity - Cantidad del mueble a agregar.
   */
  addProduct(product: furnitureInterface, quantity: number): void {
    this.catalogue.furnitureAdd(product.id, product);
    const currentQuantity = this.inventory.get(product.id) || 0;
    this.inventory.set(product.id, currentQuantity + quantity);
  }

  /**
   * Método para vender una cantidad de productos a un cliente.
   * @param client - Cliente al que se vende.
   * @param products - Muebles a vender.
   * @returns La transacción de venta si se realiza con éxito; de lo contrario, undefined.
   */
  sellProduct(
    client: EntityInterface,
    products: Furniture<furnitureInterface>,
  ): Transaction<furnitureInterface> | undefined {
    let total: number = 0;
    if (products && typeof products[Symbol.iterator] === 'function') {
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
  } else {
    console.error('products is not iterable');
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

  /**
   * Método para registrar una compra a un proveedor.
   * @param provider - Proveedor al que se compra.
   * @param products - Muebles comprados.
   * @param totalPrice - Precio total de la compra.
   * @returns La transacción de compra.
   */
  purchaseProduct(
    provider: EntityInterface,
    products: Furniture<furnitureInterface>,
    totalPrice: number,
  ): Transaction<furnitureInterface> {
  console.log('products:', products);
  console.log('products.furnitureMap:', products.furnitureMap);
      // for (const product of products.furnitureMap.forEach
      //     let currentQuantity = this.inventory.get(product.id) || 0;
      //     this.inventory.set(product.id, ++currentQuantity);
      // } //error aqui
      const furnitureMap = new Map();
      furnitureMap.set(1, { productName: 'papas', productDescription: 'lays' });
      const products1 = new Furniture(furnitureMap);
      
      for (const [key, value] of products1.furnitureMap.entries()) {
        let currentQuantity = this.inventory.get(key) || 0;
        this.inventory.set(key, ++currentQuantity);
      }
      console.log('this.inventory:', this.inventory);
    const purchaseTransaction = new Transaction(
      provider,
      "Compra",
      new Date(),
      products,
      totalPrice,
    );

    this.transactions.push(purchaseTransaction);
    console.log('this.transactions:', this.transactions);
    return purchaseTransaction;
  }

  /**
   * Método para obtener el stock disponible de un mueble específico.
   * @param furnitureId - ID del mueble.
   * @returns La cantidad disponible en el inventario del mueble especificado.
   */
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

  /**
   * Método para obtener el mueble más vendido.
   * @returns El mueble más vendido, o undefined si no hay ventas.
   */
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

  /**
   * Método para obtener la facturación total por ventas a clientes en un periodo de tiempo.
   * @param startDate - Fecha de inicio del periodo.
   * @param endDate - Fecha de fin del periodo.
   * @returns La facturación total por ventas en el periodo especificado.
   */
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

  /**
   * Método para obtener el gasto total por compras a proveedores en un periodo de tiempo.
   * @param startDate - Fecha de inicio del periodo.
   * @param endDate - Fecha de fin del periodo.
   * @returns El gasto total por compras a proveedores en el periodo especificado.
   */
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

  /**
   * Método para obtener el histórico de ventas de un cliente específico.
   * @param clientId - ID del cliente.
   * @returns Un array con las transacciones de venta del cliente especificado.
   */
  getSalesHistoryForClient(
    clientId: number,
  ): Transaction<furnitureInterface>[] {
    return this.transactions.filter(
      (transaction) =>
        transaction.type === "Venta" && transaction.entity.id === clientId,
    );
  }

  /**
   * Método para obtener el histórico de compras a un proveedor específico.
   * @param providerId - ID del proveedor.
   * @returns Un array con las transacciones de compra al proveedor especificado.
   */
  getPurchasesHistoryForProvider(
    providerId: number,
  ): Transaction<furnitureInterface>[] {
    return this.transactions.filter(
      (transaction) =>
        transaction.type === "Compra" && transaction.entity.id === providerId,
    );
  }
}
