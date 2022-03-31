import React, { FormEvent, useState } from 'react'
import { db } from '../models/db'

const ShipmentAddForm = () => {
    const [shipmentTitle, setshipmentTitle] = useState('')

    const handleSubmit = async (e : FormEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            const id: number = await db.shipmentLists
                .add({ title: shipmentTitle })

            setshipmentTitle('')
            console.log(id)

        } catch (e: unknown) {
            console.log(e)
        }
    }

    return(
        <form onSubmit={handleSubmit}> 
                <input
                    type='text'
                    id='shipment'
                    value={shipmentTitle}
                    onChange={({ target }) => setshipmentTitle(target.value)}
                />
                <button type='submit'>Add shipment</button>
        </form>
    )
}

export default ShipmentAddForm