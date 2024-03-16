export interface EntityInterface {
  id: number;
  name: string;
  contact: string;
  direction: string;
}

export interface EntityMap<T extends EntityInterface> {
  entityMap: Map<number, T>;
}

export class EntityCollection<T extends EntityInterface>
  implements EntityMap<T>, Iterable<T>
{
  constructor(public entityMap: Map<number, T>) {}

  findByField(field: keyof T, value: string | number): T[] {
    const results: T[] = [];
    for (const entity of this.entityMap.values()) {
      const fieldValue = entity[field];
      if (typeof fieldValue === "string" && typeof value === "string") {
        if (fieldValue.includes(value)) {
          results.push(entity);
        }
      } else if (fieldValue === value) {
        results.push(entity);
      }
    }
    return results;
  }

  findByName(name: string): T[] {
    return this.findByField("name", name);
  }

  findByContact(contact: string): T[] {
    return this.findByField("contact", contact);
  }

  findByDirection(direction: string): T[] {
    return this.findByField("direction", direction);
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.entityMap.values();
  }
  
  add(entity: T): void {
    this.entityMap.set(entity.id, entity);
  }

  getAll(){
    return Array.from(this.entityMap.values());
  }
}
