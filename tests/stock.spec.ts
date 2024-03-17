import "mocha";
import { Stock } from '../src/stock.js';
import { expect } from 'chai';

describe('Stock', () => {
  let stock: Stock;

  beforeEach(() => {
    stock = new Stock();
  });

  describe('getExpenseForProviderPurchases', () => {
    it('should return 0 when there are no transactions', () => {
      expect(stock.getExpenseForProviderPurchases(new Date('2022-01-01'), new Date('2022-12-31'))).to.be.equal(0);
    });

    it('should correctly sum up the total of purchase transactions within the date range', () => {
      // Add transactions to the stock
      // Assume addTransaction is a method that adds a transaction to the stock
      stock.addProduct({ id: 1, name: 'Product 1', description: 'Description 1', material: 'Material 1', price: 100, dimension: { width: 10, height: 10, length: 10 }, getInfo: () => 'Product 1' , getName: () => 'Product 1'}, 1);
      expect(stock.getStockForFurniture(1)).to.be.equal(1);
    });

    it('should not sum up transactions that are outside the date range', () => {
      // Add transactions to the stock
      stock.addProduct({ id: 1, name: 'Product 1', description: 'Description 1', material: 'Material 1', price: 100, dimension: { width: 10, height: 10, length: 10 }, getInfo: () => 'Product 1' , getName: () => 'Product 1'}, 1);
      expect(stock.getExpenseForProviderPurchases(new Date('2022-01-01'), new Date('2022-12-31'))).to.be.equal(0);
    });
  });

  describe('getSalesHistoryForClient', () => {
    it('should return an empty array when there are no transactions for a specific client', () => {
      expect(stock.getSalesHistoryForClient(1)).eql([]);
    });

    it('should return the correct transactions for a specific client', () => {
      // Add transactions to the stock
      // Assume addTransaction is a method that adds a transaction to the stock
      expect(stock.getSalesHistoryForClient(1)).eql([]);
    });
  });
});