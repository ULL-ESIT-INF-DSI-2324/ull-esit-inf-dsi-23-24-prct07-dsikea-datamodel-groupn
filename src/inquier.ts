import inquirer from "inquirer";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js";
import { Furniture } from "./furniture.js";
import { Closet } from "./furnitures/closet.js";

// Adaptador para la base de datos JSON
const adapter = new FileSync("db.json");
const db = low(adapter);
const clos = new Closet(1, "Closet", "Closet de madera", "Madera", { length: 1, width: 1, height: 1 }, 100);
//ID único.
// const furniture = new Furniture(new Map([[clos.id, clos]]));

// Inicializar la base de datos con los esquemas
db.defaults({ furniture: Furniture, suppliers: [], clients: [] }).write();

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

    switch (answer.option) {
    case "Gestionar Muebles":
        await manageFurniture();
        break;
    case "Gestionar Proveedores":
        await manageSuppliers();
        break;
    case "Gestionar Clientes":
        await manageClients();
        break;
    case "Salir":
        console.log("¡Hasta luego!");
        process.exit();
        //acabar ejecución
        process.kill(process.pid);
    break;
    }
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
async function manageSuppliers() {
 // Implementar lógica para gestionar proveedores
}

// Función para gestionar clientes
async function manageClients() {
 // Implementar lógica para gestionar clientes
}

// Función principal para iniciar la aplicación
async function startApp() {
    console.log("Bienvenido a la aplicación de gestión de muebles, proveedores y clientes.");
    mainMenu();
}

// Iniciar la aplicación
startApp();