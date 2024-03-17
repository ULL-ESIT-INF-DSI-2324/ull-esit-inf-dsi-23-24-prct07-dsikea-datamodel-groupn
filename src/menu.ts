// AQUI VA EL INQUIRER

// YA QUEDA POCO LEONES

import inquirer from 'inquirer';
import { JsonStock } from './database.js';
import { table } from 'console';
import { Furniture, furnitureInterface} from './furniture.js';

// Función para mostrar el stock actual de muebles
function displayStock() {
    const data = [["ID", "Nombre", "Descripción", "Material", "Precio", "Cantidad"]];
    for (const [id, quantity] of stock.inventory) {
      const furniture = stock.catalogue.getFurniture(id);
      if (furniture) {
        data.push([
          id.toString(),
          furniture.name,
          furniture.description,
          furniture.material,
          furniture.price.toString(),
          quantity.toString(),
        ]);
      }
    }
    //const output = table(data);
    console.log(table(data));
  }
  
  // Función principal para mostrar el menú y manejar las acciones del usuario
  async function main() {
    while (true) {
      const { action } = await inquirer.prompt({
        type: "list",
        name: "action",
        message: "Seleccione una acción:",
        choices: ["Mostrar stock", "Comprar muebles", "Vender muebles", "Mostrar informes", "Salir"],
      });
  
      switch (action) {
        case "Mostrar stock":
          displayStock();
          break;
        case "Comprar muebles":
          // Implementa la lógica para comprar muebles
          break;
        case "Vender muebles":
          // Implementa la lógica para vender muebles
          break;
        case "Mostrar informes":
          // Implementa la lógica para mostrar informes
          break;
        case "Salir":
          console.log("Saliendo...");
          return;
      }
    }
  }
  
  // Ejecuta la función principal


// Crea una instancia de JsonStock
const stock = new JsonStock();

// Inicializar la base de datos con los esquemas
stock.updateDatabase();

// Función para mostrar el menú principal
async function mainMenu() {
    const answer = await inquirer.prompt({
        type: "list",
        name: "option",
        message: "Selecciona una opción:",
        choices: [
            "Gestionar Muebles",
            "Gestionar Proveedores",
            "Gestionar Clientes",
            "Salir",
        ],
    });

await stock.updateDatabase()
    switch (answer.option) {
    case "Gestionar Muebles":
        await manageFurniture();
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


// Función para gestionar muebles
async function manageFurniture() {
    const furnitureMenuAnswer = await inquirer.prompt({
        type: "list",
        name: "option",
        message: "Selecciona una opción:",
        choices: ["Listar Muebles", "Añadir el mueble al catálogo", "Añadir Mueble", "Eliminar Mueble", "Volver"],
    });

    const furnitureList = stock.catalogue;
    switch (furnitureMenuAnswer.option) {
        case "Listar Muebles":
            console.log("Lista de Muebles:");
            console.table(furnitureList);
            break;
        case "Añadir el mueble al catálogo":
            // Pedir mueble a añadir  
            //preguntar al usuario cliente
          // Pedir datos del proveedor
const providerData = await inquirer.prompt([
  {
      type: "input",
      name: "providerName",
      message: "Introduce el nombre del proveedor:",
  },
  {
      type: "input",
      name: "providerEmail",
      message: "Introduce el correo electrónico del proveedor:",
  },
  // Añade más campos según sea necesario
]);

// Pedir datos del producto
const productData1 = await inquirer.prompt([
  {
      type: "input",
      name: "productName",
      message: "Introduce el nombre del producto:",
  },
  {
      type: "input",
      name: "productDescription",
      message: "Introduce la descripción del producto:",
  },
  // Añade más campos según sea necesario
]);

const intproductData1 : furnitureInterface = {
  id: 1,
  name: productData1.productName,
  description: productData1.productDescription,
  material: "Madera",
  dimension: {width: 100, height: 100, length: 100},
  price: 100,
  getInfo: function() {
      return `ID: ${this.id}, Nombre: ${this.name}, Descripción: ${this.description}, Material: ${this.material}, Dimensiones: ${this.dimension.width}x${this.dimension.height}x${this.dimension.length}, Precio: ${this.price}`;
  },
  getName: function() {
      return this.name;
  }

};
const productfinal = new Furniture<furnitureInterface>(productData1);

// Pedir el precio total
const priceData = await inquirer.prompt([
  {
      type: "input",
      name: "totalPrice",
      message: "Introduce el precio total:",
  },
]);

// Ahora tienes los datos del proveedor, del producto y del precio en `providerData`, `productData` y `priceData`

            await stock.purchaseProduct(providerData, productfinal, priceData); //MANTINIMINRNTO

            stock.addProduct(intproductData1, 10);
            stock.updateDatabase();

            console.log("Mueble añadido al catálogo");
            console.log(stock.catalogue);
            console.log(stock.inventory);
            displayStock();

            manageFurniture();
            break;
        case "Vender el mueble del catálogo":
          // Pedir datos del cliente
const clientData = await inquirer.prompt([
  {
      type: "input",
      name: "clientName",
      message: "Introduce el nombre del cliente:",
  },
  {
      type: "input",
      name: "clientEmail",
      message: "Introduce el correo electrónico del cliente:",
  },
  // Añade más campos según sea necesario
]);

// Pedir datos del producto
const productData = await inquirer.prompt([
  {
      type: "input",
      name: "productName",
      message: "Introduce el nombre del producto:",
  },
  {
      type: "input",
      name: "productDescription",
      message: "Introduce la descripción del producto:",
  },
  // Añade más campos según sea necesario
]);

// Ahora tienes los datos del cliente y del producto en `clientData` y `productData`
            await stock.sellProduct(productData, clientData);
            break;
        case "Volver":
            return;
    }
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
    console.log("¡Bienvenido a la aplicación DSIKEA!");
    mainMenu();
}

// Iniciar la aplicación
startApp();