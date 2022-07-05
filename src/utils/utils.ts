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

/** Check if storage is persisted already.
  @returns {Promise<boolean | undefined>} Promise resolved with true if current origin is
  using persistent storage, false if not, and undefined if the API is not
  present.
*/
export async function isStoragePersisted(): Promise<boolean | undefined> {
   return await navigator.storage && navigator.storage.persisted ?
      navigator.storage.persisted() :
      undefined
}

/** Tries to convert to persisted storage.
  @returns {Promise<boolean | undefined>} Promise resolved with true if successfully
  persisted the storage, false if not, and undefined if the API is not present.
*/
export async function persist() {
   return await navigator.storage && navigator.storage.persist ?
      navigator.storage.persist() :
      undefined
}

/** Queries available disk quota.
  @see https://developer.mozilla.org/en-US/docs/Web/API/StorageEstimate
  @returns {Promise<{quota: number, usage: number}>} Promise resolved with
  {quota: number, usage: number} or undefined.
*/
export async function showEstimatedQuota() {
   return await navigator.storage && navigator.storage.estimate ?
      navigator.storage.estimate() :
      undefined
}

/** Tries to persist storage without ever prompting user.
  @returns {Promise<string>}
    "never" In case persisting is not ever possible. Caller don't bother
      asking user for permission.
    "prompt" In case persisting would be possible if prompting user first.
    "persisted" In case this call successfully silently persisted the storage,
      or if it was already persisted.
*/
async function tryPersistWithoutPromtingUser() {
   if (!navigator.storage || !navigator.storage.persisted) {
      return "never"
   }
   let persisted = await navigator.storage.persisted()
   if (persisted) {
      return "persisted"
   }
   if (!navigator.permissions || !navigator.permissions.query) {
      return "prompt" // It MAY be successful to prompt. Don't know.
   }
   const permission = await navigator.permissions.query({
      name: "persistent-storage"
   })
   if (permission.state === "granted") {
      persisted = await navigator.storage.persist()
      if (persisted) {
         return "persisted"
      } else {
         throw new Error("Failed to persist")
      }
   }
   if (permission.state === "prompt") {
      return "prompt"
   }
   return "never"
}

export async function initStoragePersistence() {
   const Persist = await tryPersistWithoutPromtingUser()
   switch (Persist) {
      case "never":
         console.log("Not possible to persist storage")
         break
      case "persisted":
         console.log("Successfully persisted storage")
         break
      case "prompt":
         await persist()
         break
   }
}
