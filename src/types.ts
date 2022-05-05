import { ShipmentOrder } from "./models/ShipmentOrder"

export type FormattedCSVData = Omit<ShipmentOrder, 'id' | 'shipmentListId'>