import inquirer from "inquirer";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import { Furniture, furnitureInterface } from "../furniture.js";
import { Closet } from "../furnitures/closet.js";
import { EntityCollection, EntityInterface, EntityMap } from "../entities/EntityCollection.js";
import { Stock } from "../stock.js";
// import { Provider } from "./provider.js";
// import { Client } from "./client.js";

// Adaptador para la base de datos JSON
const adapter = new FileSync("db.json");
const db = low(adapter);
const clos = new Closet(
  1,
  "Closet",
  "Closet de madera",
  "Madera",
  { length: 1, width: 1, height: 1 },
  100,
);

const mueble = new Furniture(new Map([[clos.id, clos]]));

const EntityMap = new Map<number, EntityInterface>([[1, { id: 1, name: "Juan", contact: 123456789, email: " Juan @gmail.com", direction: "Calle 123" }]]);
const client = new EntityCollection(EntityMap);
const provider = new Map<string, number>([
  ["Juan", 10],
  ["Pedro", 5],
  ["Maria", 20],
]);
const stock = new Stock(mueble, client, provider);
//ID único.
// const furniture = new Furniture(new Map([[clos.id, clos]]));

// Inicializar la base de datos con los esquemas
db.defaults({
  furniture: Furniture,
  providers: Provider,
  clients: Client,
  stockList: Stock,
}).write();

// Función para mostrar el menú principal.
async function mainMenu() {
  const answer = await inquirer.prompt({
    type: "list",
    name: "option",
    message: "Selecciona una opción:",
    choices: [
      "Gestionar Muebles",
      "Gestionar Proveedores",
      "Gestionar Clientes",
      "Gestionar Stock",
      "Salir",
    ],
  });

  switch (answer.option) {
    case "Gestionar Muebles":
      await manageFurniture();
      break;
    case "Gestionar Stock":
      await manageStock();
      break;
    case "Gestionar Proveedores":
      await manageProviders();
      break;
    case "Gestionar Clientes":
      await manageClients();
      break;
    case "Salir":
      console.log("¡Hasta luego!");
      process.exit();
      break;
  }
}

async function manageStock() {
  const stockMenuAnswer = await inquirer.prompt({
    type: "list",
    name: "option",
    message: "Selecciona una opción:",
    choices: [
      "Listar Stock",
      "Añadir Stock",
      "Eliminar Stock",
      "Registrar Venta",
      "Salir",
    ],
  });
  const stockLT = db.get("stockList").value();

  switch (stockMenuAnswer.option) {
    case "Listar Stock":
      console.log("Lista de Stock:");

      console.table(stockLT);
      mainMenu();
      break;
    case "Añadir Stock":
      const answer = await inquirer.prompt({
        type: "number",
        name: "quantity",
        message: "Introduce la cantidad a añadir:",
      });
      console.log(`La cantidad introducida es: ${answer.quantity}`);
      let cantidad = answer.quantity;
      stockLT.push({ name: "Closet", quantity: cantidad });
      console.table(stockLT);
      mainMenu();
      break;
    case "Eliminar Stock":
      // Implementar lógica para eliminar stock
      mainMenu();
      break;
    case "Volver":
      break;
  }
  return;
}

// Función para gestionar muebles
async function manageFurniture() {
  const furnitureMenuAnswer = await inquirer.prompt({
    type: "list",
    name: "option",
    message: "Selecciona una opción:",
    choices: ["Listar Muebles", "Añadir Mueble", "Eliminar Mueble", "Volver"],
  });

  const furnitureList = db.get("furniture").value();
  switch (furnitureMenuAnswer.option) {
    case "Listar Muebles":
      console.log("Lista de Muebles:");
      console.table(furnitureList);
      mainMenu();
      break;
    case "Añadir Mueble":
      furnitureList.push(clos);
      mainMenu();
      break;
    case "Eliminar Mueble":
      // Implementar lógica para eliminar muebles
      mainMenu();
      break;
    case "Volver":
      break;
  }
  return;
}

// Función para gestionar proveedores
async function manageProviders() {
  // Implementar lógica para gestionar proveedores
}

// Función para gestionar clientes
async function manageClients() {
  // Implementar lógica para gestionar clientes
}

// Función principal para iniciar la aplicación
async function startApp() {
  console.log(
    "Bienvenido a la aplicación de gestión de muebles, proveedores y clientes.",
  );
  mainMenu();
}

// Iniciar la aplicación

startApp();
