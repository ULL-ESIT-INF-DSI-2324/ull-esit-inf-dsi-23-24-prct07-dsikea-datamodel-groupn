import inquirer from "inquirer";
import { JSONFilePreset } from "lowdb/node";
import { Low } from "lowdb";
import  FileSync  from "lowdb/adapters/FileSync";
import { furnitureInterface } from "./furniture";

// Crear una instancia de la base de datos

// Read or create db.json
const defaultData = { posts: [] }
const db = await JSONFilePreset('db.json', defaultData)

// Update db.json
await db.update(({ posts }) => posts.push('hello world'))

// Alternatively you can call db.write() explicitely later
// to write to db.json
db.data.posts.push('hello world')
await db.write()
