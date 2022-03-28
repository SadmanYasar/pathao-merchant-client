import Dexie, { Table } from 'dexie';

export interface Order {
  id?: number;
  name: string;
  phone: string;
}

export class OrderDB extends Dexie {
  // 'orders' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  orders!: Table<Order>; 

  constructor() {
    super('OrderDB');
    this.version(1).stores({
      orders: '++id, name, phone' // Primary key and indexed props
    });
  }
}

export const db = new OrderDB();