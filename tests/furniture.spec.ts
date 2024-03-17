import 'mocha';
import { expect } from 'chai';
import { Furniture, furnitureInterface} from '../src/furniture.js';
import { Tables } from '../src/furnitures/tables.js';

// pruebas sobre la clase funriture y sus funciones

describe("getSalesHistoryForClient", () => {
  const furniture = new Tables(1, 'mesa', 'roka', 'redonda', {width: 1, height: 1, length: 1}, 100);
        it('should add new furniture', () => {
             const furnitures = new Furniture(new Map<number, furnitureInterface>);
             expect(furnitures.furnitureAdd(furniture.id, furniture)).to.be.an.instanceOf(undefined);
         });
         it('should return the furniture by his id', () => {
             const furnitures = new Furniture(new Map<number, furnitureInterface>);
             expect(furnitures.getKey(furniture.id)).to.equal(undefined);
         });
        it('should add new furniture', () => {
             const furnitures = new Furniture(new Map<number, furnitureInterface>);
             expect(furnitures.furnitureAdd(furniture.id, furniture)).to.be.an.instanceOf(undefined);
         });
         it('should return the furniture by his id', () => {
             const furnitures = new Furniture(new Map<number, furnitureInterface>);
             expect(furnitures.getKey(furniture.id)).to.equal(undefined );
         });
});

