import Dexie, { Table } from 'dexie'
import { populate } from './populate'
import { ShipmentList } from './ShipmentList'
import { ShipmentOrder } from './ShipmentOrder'

export class ShipmentDB extends Dexie {
  shipmentLists!: Table<ShipmentList, number>
  shipmentOrders!: Table<ShipmentOrder, number>

  constructor() {
    super('ShipmentDB')
    this.version(2).stores({
      shipmentLists: '++id',
      shipmentOrders: '++id, shipmentListId',
    })
  }

  deleteShipmentList(shipmentListId: number) {
    return this.transaction('rw', this.shipmentLists, this.shipmentOrders, () => {
      //finds the fields where shipmentlist id matches param
      //then deletes them
      //and deletes the shipment list
      this.shipmentOrders.where({ shipmentListId }).delete()
      this.shipmentLists.delete(shipmentListId)
    })
  }
}

export const db = new ShipmentDB()

db.on('populate', populate)