import { db } from './db';

export async function populate() {
  const shipmentListId = await db.shipmentLists.add({
    title: 'Shipment 1'
  });
  await db.shipmentOrders.bulkAdd([
    {
      shipmentListId,
      ItemType: 'parcel',
      StoreName: 'hope world',
      RecipientName: 'Jason',
      RecipientPhone: '12345',
      RecipientCity: 'ctg',
      RecipientZone: 'ctg',
      RecipientAddress: 'chittagong',
      AmountToCollect: 100,
      ItemQuantity: 1,
      ItemWeight: 12,
      itemDescription: 'photo card',
    }
  ]);
}