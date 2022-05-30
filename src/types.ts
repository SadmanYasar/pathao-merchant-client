import { ShipmentOrder } from "./models/ShipmentOrder"

export type FormattedCSVData = Omit<ShipmentOrder, 'id' | 'shipmentListId'>

export type UpdateKeyTypes = 'RecipientName(*)' | 'RecipientPhone(*)' | 'RecipientAddress(*)' | 'AmountToCollect(*)' | 'ItemWeight(*)'