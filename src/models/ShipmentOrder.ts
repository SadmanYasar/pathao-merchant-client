export interface ShipmentOrder {
    id?: number;
    shipmentListId?: number;
    itemDescription: string;
    ItemType: 'parcel' | 'document';
    StoreName: string;
    RecipientName: string;
    RecipientPhone: string;
    RecipientCity: string;
    RecipientZone?: string;
    RecipientAddress: string;
    AmountToCollect: number | '';
    ItemQuantity: number | '';
    ItemWeight: number | '';
}