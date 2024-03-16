//import { Furniture, furnitureInterface } from './furniture.js';
//import { Transaction } from './transaction.js';
//import { Client } from './entities/client.js';
//import { EntityInterface } from './entities/EntityCollection.js';
// Clase Stock
// export class Stock {
//   constructor(public cantidadstock: Map<string, number>) {
//     //asociar cantidad de muebles a cada mueble
//   }
//   // Métodos para gestionar el stock
//   addfurniture(name: string, addcantidad: number) {
//     //modficar cantidad de ese mueble por nombre
//     const currentStock = this.cantidadstock.get(name);
//     if (currentStock !== undefined) {
//       this.cantidadstock.set(name, currentStock + addcantidad);
//     } else {
//       this.cantidadstock.set(name, addcantidad);
//     }
//   }

// deletefurniture(nombre: string) {
//     this.muebles = this.muebles.filter(mueble => mueble.furnitureMap.keys().next().value !== nombre);
// }

// // Métodos para registrar transacciones
// registerventa(cliente: Client<EntityInterface>, muebles: Furniture<T>, importe: number) {
//     const fecha = new Date();
//     this.transacciones.push(new Transaction(fecha, muebles, importe));
// }

// getStock(id: number) {
//     return this.muebles[id];
// }

// registerbuy(proveedor: Proveedor, muebles: Furniture<T>, importe: number) {
//     const fecha = new Date();
//     this.transacciones.push(new Transaction(fecha, muebles, importe));
// }

// Otros métodos para obtener información del stock
// (no se han implementado aquí por simplicidad)
// }

// A partir de aqui se viene lo bueno:

// import fs from "fs";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import { Furniture, furnitureInterface } from "./furniture.js";
import {
  EntityCollection,
  EntityInterface,
} from "./entities/EntityCollection.js";
import { Transaction } from "./transaction.js";

//porque queires meter cliente???
//solo hacee falta furniture creo yo

const adapter = new FileSync("stock.json");
const db = low(adapter);

export class Stock {
  private transactions: Transaction<furnitureInterface>[] = [];
  constructor(
    private furnitures: Furniture<furnitureInterface>,
    private clients: EntityCollection<EntityInterface>,
    private providers: EntityCollection<EntityInterface>,
  ) {
    db.defaults({
      furnitures: { furnitures },
      clients: { clients },
      providers: { providers },
    }).write();
  }

  getStock() {
    return db.get("stock").value();
  }

  addClient(newClient: EntityInterface) {
    this.clients.add(newClient);
  }

  sale(client: EntityInterface, saleDetails: [Furniture<furnitureInterface>, number]): Transaction<furnitureInterface> | null {
    const [furnitureToSale, amount] = saleDetails;

    // Verificar si el mueble está en stock y si hay suficientes existencias
    if (!this.hasEnoughStock(furnitureToSale, amount)) {
      console.log("No hay suficientes existencias para completar la venta.");
      return null;
    }

    // Simular la venta restando las existencias
    furnitureToSale.quantity -= amount;

    // Registrar la transacción de venta
    const transaction = new Transaction("Venta", new Date(), [furnitureToSale], furnitureToSale.price * amount);
    this.transactions.push(transaction);

    // Devolver la transacción al cliente
    return transaction;
  }

  addProvider(newProvider: EntityInterface) {
    this.providers.add(newProvider);
  }

  getClients() {
    return this.clients.getAll();
  }
  getProviders() {
    return this.providers.getAll();
  }
}

module.exports = Stock;

//buen copilot ale (ojala copilot)
//mete
//asi deberia ir bien

// class Stock1 {
//   public stockData: Map<string, number>;
//   constructor() {
//     this.stockData = new Map<string, number>();
//     this.loadStockData();
//   }

//   loadStockData() {
//     try {
//       const data = fs.readFileSync("stock.json", "utf8");
//       this.stockData = new Map<string, number>(JSON.parse(data));
//     } catch (err) {
//       this.stockData = new Map<string, number>();
//     }
//   }
//
//   saveStockData() {
//     fs.writeFileSync("stock.json", JSON.stringify(Array.from(this.stockData.entries())));
//   }

//   addFurniture(name: string, quantity: number) {
//     if (this.stockData.get(name)) {
//       this.stockData.set(name, this.stockData.get(name)! + quantity);
//     } else {
//       this.stockData.set(name, quantity);
//     }
//     this.saveStockData();
//   }

//   getStock() {
//     return this.stockData;
//   }
// }
