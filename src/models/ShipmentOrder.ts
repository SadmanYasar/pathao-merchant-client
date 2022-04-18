export interface ShipmentOrder {
    id?: number;
    shipmentListId?: number;
    'ItemType(*)': 'parcel' | 'document';
    'StoreName(*)': string;
    MerchantOrderId?: string;
    'RecipientName(*)': string;
    'RecipientPhone(*)': string;
    'RecipientCity(*)': string;
    'RecipientZone(*)'?: string;
    RecipientArea?: string;
    'RecipientAddress(*)': string;
    'AmountToCollect(*)': number | '';
    'ItemQuantity(*)': number | '';
    'ItemWeight(*)': number | '';
    ItemDesc: string;
    SpecialInstruction: string;
}