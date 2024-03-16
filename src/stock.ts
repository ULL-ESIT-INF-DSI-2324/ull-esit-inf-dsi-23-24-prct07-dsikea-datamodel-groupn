//import { Furniture, furnitureInterface } from './furniture.js';
//import { Transaction } from './transaction.js';
//import { Client } from './entities/client.js';
//import { EntityInterface } from './entities/EntityCollection.js';
// Clase Stock
export class Stock {
  constructor(public cantidadstock: Map<string, number>) {
    //asociar cantidad de muebles a cada mueble
  }
  // Métodos para gestionar el stock
  addfurniture(name: string, addcantidad: number) {
    //modficar cantidad de ese mueble por nombre
    const currentStock = this.cantidadstock.get(name);
    if (currentStock !== undefined) {
      this.cantidadstock.set(name, currentStock + addcantidad);
    } else {
      this.cantidadstock.set(name, addcantidad);
    }
  }

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
}
