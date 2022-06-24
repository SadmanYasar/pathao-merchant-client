import { ShipmentOrder } from "../models/ShipmentOrder"
import { UpdateKeyTypes } from "../types"

const generateRegex = (x: string[]) => {
   return x.map((val) => {
      const string = `(?<=${val}(\\s{0,3}):).*`
      return new RegExp(string, 'i')
   })
}

const types = ['name', 'phone', 'address', 'due', 'weight']


export const initialValues: ShipmentOrder = {
   'ItemType(*)': 'parcel',
   'StoreName(*)': '',
   MerchantOrderId: '',
   'RecipientName(*)': '',
   'RecipientPhone(*)': '',
   'RecipientCity(*)': '',
   'RecipientZone(*)': '',
   RecipientArea: '',
   'RecipientAddress(*)': '',
   'AmountToCollect(*)': 0,
   'ItemQuantity(*)': 1,
   'ItemWeight(*)': 0,
   ItemDesc: '',
   SpecialInstruction: ''
}
export const keysToUpdate: UpdateKeyTypes[] = ['RecipientName(*)', 'RecipientPhone(*)', 'RecipientAddress(*)', 'AmountToCollect(*)', 'ItemWeight(*)']
export const newTypes = generateRegex(types)