// Transaction class
import { Furniture } from "./furniture.js";
import { furnitureInterface } from "./furniture.js";
export class Transaction {
  constructor(
    public date: Date,
    public furnitures: Furniture<furnitureInterface>,
    public amount: number,
  ) {}
}
