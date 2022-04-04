import { db } from './db';

export async function populate() {
  const shipmentListId = await db.shipmentLists.add({
    title: 'Shipment 1'
  });
  await db.shipmentOrders.bulkAdd([
    {
      shipmentListId,
      AmountToCollect: 100,
      ItemQuantity: 1,
      ItemType: 'parcel',
      ItemWeight: 12,
      RecipientAddress: 'chittagong',
      RecipientCity: 'ctg',
      RecipientName: 'Jason',
      RecipientPhone: '12345',
      StoreName: 'hope world',
      itemDescription: 'photo card',
      RecipientZone: 'ctg'
    }
  ]);
}