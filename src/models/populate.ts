import { db } from './db';

export async function populate() {
  const shipmentListId = await db.shipmentLists.add({
    title: 'Shipment 1'
  });
  await db.shipmentOrders.bulkAdd([
    {
      shipmentListId,
      name: 'Feed the birds',
      phone: '123'
    },
    {
      shipmentListId,
      name: 'Watch a movie',
      phone: '123'
    },
    {
      shipmentListId,
      name: 'Have some sleep',
      phone: '123'
    }
  ]);
}