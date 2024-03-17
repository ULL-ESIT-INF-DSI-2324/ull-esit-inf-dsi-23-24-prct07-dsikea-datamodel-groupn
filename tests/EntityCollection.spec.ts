// import "mocha";
// import { expect } from "chai";

import "mocha";
import { Stock } from "../src/stock.js";
import { expect } from "chai";
import { Transaction } from "../src/transaction.js";
import { Furniture } from "../src/furniture.js";
import { EntityCollection } from "../src/entities/EntityCollection.js";

describe("getExpenseForProviderPurchases", () => {
  it("should create a new transaction", () => {
    const entities = [
      { id: 1, name: "Entity1", contact: "Contact1", direction: "Direction1" },
      { id: 2, name: "Entity2", contact: "Contact2", direction: "Direction2" },
    ];

    const entityMap = new Map(entities.map((entity) => [entity.id, entity]));
    const collection = new EntityCollection(entityMap);
    expect(collection).to.be.an.instanceOf(EntityCollection);
  });
});

describe("getSalesHistoryForClient", () => {
  it("should find entities by a specific field and value", () => {
    const entities = [
      { id: 1, name: "Entity1", contact: "Contact1", direction: "Direction1" },
      { id: 2, name: "Entity2", contact: "Contact2", direction: "Direction2" },
    ];

    const entityMap = new Map(entities.map((entity) => [entity.id, entity]));
    const collection = new EntityCollection(entityMap);
    const results = collection.findByField("name", "Entity1");
    expect(results).to.have.lengthOf(1);
    expect(results[0]).to.deep.equal(entities[0]);
  });

  it("should find entities by name", () => {
    const entities = [
      { id: 1, name: "Entity1", contact: "Contact1", direction: "Direction1" },
      { id: 2, name: "Entity2", contact: "Contact2", direction: "Direction2" },
    ];

    const entityMap = new Map(entities.map((entity) => [entity.id, entity]));
    const collection = new EntityCollection(entityMap);
    const results = collection.findByName("Entity2");
    expect(results).to.have.lengthOf(1);
    expect(results[0]).to.deep.equal(entities[1]);
  });
  // Test findByName method
  it("should find entities by name", () => {
    const entities = [
      { id: 1, name: "Entity1", contact: "Contact1", direction: "Direction1" },
      { id: 2, name: "Entity2", contact: "Contact2", direction: "Direction2" },
    ];

    const entityMap = new Map(entities.map((entity) => [entity.id, entity]));
    const collection = new EntityCollection(entityMap);
    const results = collection.findByName("Entity2");
    expect(results).to.have.lengthOf(1);
    expect(results[0]).to.deep.equal(entities[1]);
  });

  // Test findByContact method
  it("should find entities by contact", () => {
    const entities = [
      { id: 1, name: "Entity1", contact: "Contact1", direction: "Direction1" },
      { id: 2, name: "Entity2", contact: "Contact2", direction: "Direction2" },
    ];

    const entityMap = new Map(entities.map((entity) => [entity.id, entity]));
    const collection = new EntityCollection(entityMap);
    const results = collection.findByContact("Contact1");
    expect(results).to.have.lengthOf(1);
    expect(results[0]).to.deep.equal(entities[0]);
  });

  // Test findByDirection method
  it("should find entities by direction", () => {
    const entities = [
      { id: 1, name: "Entity1", contact: "Contact1", direction: "Direction1" },
      { id: 2, name: "Entity2", contact: "Contact2", direction: "Direction2" },
    ];

    const entityMap = new Map(entities.map((entity) => [entity.id, entity]));
    const collection = new EntityCollection(entityMap);
    const results = collection.findByDirection("Direction2");
    expect(results).to.have.lengthOf(1);
    expect(results[0]).to.deep.equal(entities[1]);
  });

  // Test add method
  it("should add an entity to the collection", () => {
    const entities = [
      { id: 1, name: "Entity1", contact: "Contact1", direction: "Direction1" },
      { id: 2, name: "Entity2", contact: "Contact2", direction: "Direction2" },
    ];

    const entityMap = new Map(entities.map((entity) => [entity.id, entity]));
    const collection = new EntityCollection(entityMap);
    const newEntity = {
      id: 3,
      name: "Entity3",
      contact: "Contact3",
      direction: "Direction3",
    };
    collection.add(newEntity);
    const allEntities = collection.getAll();
    expect(allEntities).to.have.lengthOf(entities.length + 1);
    expect(allEntities).to.deep.include(newEntity);
  });

  // Test getAll method
  it("should get all entities from the collection", () => {
    const entities = [
      { id: 1, name: "Entity1", contact: "Contact1", direction: "Direction1" },
      { id: 2, name: "Entity2", contact: "Contact2", direction: "Direction2" },
    ];

    const entityMap = new Map(entities.map((entity) => [entity.id, entity]));
    const collection = new EntityCollection(entityMap);
    const allEntities = collection.getAll();
    expect(allEntities).to.have.lengthOf(entities.length);
    expect(allEntities).to.deep.equal(entities);
  });
});
