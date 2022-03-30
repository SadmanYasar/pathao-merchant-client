import Dexie, { Table } from 'dexie';
import { populate } from './populate';
import { ShipmentList } from './ShipmentList';
import { ShipmentOrder } from './ShipmentOrder';

export class ShipmentDB extends Dexie {
  shipmentLists!: Table<ShipmentList, number>
  shipmentOrders!: Table<ShipmentOrder, number>; 

  constructor() {
    super('ShipmentDB');
    this.version(1).stores({
      shipmentLists: '++id',
      shipmentOrders: '++id, shipmentListId', // Primary key and indexed props
    });
  }
}

export const db = new ShipmentDB();

db.on('populate', populate);