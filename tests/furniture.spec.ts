import 'mocha';
import { expect } from 'chai';
import { Furniture, furnitureInterface} from '../src/furniture';

// pruebas sobre la clase funriture y sus funciones 
describe('Furniture', () => {
    it('should create a new furniture', () => {
        const furniture = {
          id: 1,
          name: 'table', 
          description: 'table',
          material: 'wood',
          dimension: '50x50x50',
          price: 200
        };
        expect(furniture).to.be.an.instanceOf(Furniture);
    });
    it('should return the furniture name', () => {
        const furniture = new Furniture(new Map<number, interface>);
        expect(furniture.getName()).to.equal('table');
    });
    it('should return the furniture price', () => {
        const furniture = new Furniture('table', 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50);
        expect(furniture.getPrice()).to.equal(100);
    });
  });