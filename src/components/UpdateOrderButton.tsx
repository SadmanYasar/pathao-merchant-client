import { useState } from "react"
import { db } from "../models/db"
import { ShipmentOrder } from "../models/ShipmentOrder"

interface UpdateButtonProps {
    item: ShipmentOrder
}

const UpdateOrderButton = ({ item }: UpdateButtonProps) => {
    const [fields, setfields] = useState<ShipmentOrder>(item)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = ({ target }: any) => setfields({
        ...fields,
        [target.name]: target.value
    })

    const style = {
        margin: '10px',
        padding: '10px'
    }

    return(
        <>
        <input 
            style={style}
            type='text' 
            name='RecipientName'
            value={fields['RecipientName(*)']} 
            onChange={handleChange} />
        <button
            type='button'
            onClick={() => {
                db.shipmentOrders.update(
                    Number(item.id),
                    { 'RecipientName(*)': fields['RecipientName(*)']}
                )
            }}
            >
                Update
        </button>
        </>
    )
}

export default UpdateOrderButton