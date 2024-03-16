// type search = number | string;
// export interface Searchable<T extends { id: number }> {
//   findById(id: number): T | undefined;
//   findByAttribute(attribute: keyof T, value: search): T | undefined;
// }

// export class SearchHelper<T extends { id: number }> implements Searchable<T> {
//   constructor(private items: Map<number, T>) {}

//   find(name: string): T | undefined {
//     return this.items.get(name);
//   }

//   findByAttribute(attribute: keyof T, value: search): T | undefined {
//     for (const item of this.items.values()) {
//       if (item[attribute] === value) {
//         return item;
//       }
//     }
//     return undefined;
//   }

//   findStringCoincidences(item: string): T[] {
//     let coincidences: T[] = [];
//     for (const element of this.items.values()) {
//       if (typeof element === "string" && element.includes(item)) {
//         coincidences.push(element);
//       }
//     }
//     return coincidences;
//   }
// }
