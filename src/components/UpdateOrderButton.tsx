import { useState } from "react"
import { db } from "../models/db"
import { ShipmentOrder } from "../models/ShipmentOrder"

interface UpdateButtonProps {
    item: ShipmentOrder
}

const UpdateOrderButton = ({ item }: UpdateButtonProps) => {
    const [name, setname] = useState(item.name)

    return(
        <>
        <input 
            type='text' 
            value={name} 
            onChange={({ target }) => setname(target.value)} />
        <button
            type='button'
            onClick={() => {
                db.shipmentOrders.update(
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    item.id!,
                    { name: name }
                )
            }}
            >
                Update
        </button>
        </>
    )
}

export default UpdateOrderButton