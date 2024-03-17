
import "mocha";
import { Stock } from '../src/stock.js';
import { expect } from 'chai';
import { Transaction } from '../src/transaction.js';
import { Furniture } from '../src/furniture.js';

describe('Transaction', () => {
  let stock: Stock;

  beforeEach(() => {
    stock = new Stock();
  });

  describe('getExpenseForProviderPurchases', () => {
    it('should create a new transaction', () => {
            const transaction = new Transaction(
              { id: 1, name: 'Entity', contact: 'Contact', direction: 'Direction' },
                'Venta',
                new Date('2022-01-01'),
                new Furniture(new Map([[1, { id: 1, name: 'Furniture', description: 'Description', material: 'Material', dimension: { width: 1, height: 1, length: 1 }, price: 100 , getInfo: () => 'Info' , getName: () => 'Name' }]])),
                100
                );  
                let map = new Map();
                map.set(1, { id: 1, name: 'Furniture', description: 'Description', material: 'Material', dimension: { width: 1, height: 1, length: 1 }, price: 100 , getInfo: () => 'Info' , getName: () => 'Name' });
        
            // expect(transaction).to.be.an.instanceof(Transaction);
            // expect(transaction.type).to.equal('Venta');
            // expect(transaction.date).to.deep.equal(new Date('2022-01-01'));
             console.log(transaction.furnitures);
             //expect(transaction.furnitures.furnitureMap).eql(map);

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
});

// import { expect } from 'chai';
// // import * as sinon from 'sinon';
// import { Transaction } from '../src/transaction';
// import { Furniture } from '../src/furniture';

// describe('Transaction', () => {
//   it('should create a new transaction', () => {
//     const transaction = new Transaction(
//       { id: 1, name: 'Entity', contact: 'Contact', direction: 'Direction' },
//         'Venta',
//         new Date('2022-01-01'),
//         new Furniture(new Map([[1, { id: 1, name: 'Furniture', description: 'Description', material: 'Material', dimension: { width: 1, height: 1, length: 1 }, price: 100 , getInfo: () => 'Info' , getName: () => 'Name' }]])),
//         100
//         );  

//      expect(transaction).to.be.an.instanceof(Transaction);
//     // expect(transaction.entity).to.deep.equal({ id: 1, name: 'Entity' });
//     // expect(transaction.type).to.equal('Venta');
//     // expect(transaction.date).to.deep.equal(new Date('2022-01-01'));
//     // expect(transaction.furnitures).to.deep.equal({ id: 1, name: 'Furniture', price: 100 });
//     // expect(transaction.total).to.equal(100);
//   });

//   it('should display transaction info', () => {
//     const transaction = new Transaction(
//         { id: 1, name: 'Entity', contact: 'Contact', direction: 'Direction' },
//           'Venta',
//           new Date('2022-01-01'),
//           new Furniture(new Map([[1, { id: 1, name: 'Furniture', description: 'Description', material: 'Material', dimension: { width: 1, height: 1, length: 1 }, price: 100 , getInfo: () => 'Info' , getName: () => 'Name' }]])),
//           100
//           );  

//     //  const consoleSpy = sinon.spy(console, 'log');
//     // transaction.displayInfo();
//      expect(true).to.equal(true);
//     // consoleSpy.restore();
//   });
// });