import React, { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { CSVLink } from 'react-csv'
import { useParams } from 'react-router-dom'
import ProductForm from './ProductForm'
import { ShipmentOrder } from '../models/ShipmentOrder'

interface UpdateButtonProps {
    item: ShipmentOrder
}

const UpdateButton = ({ item }: UpdateButtonProps) => {
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

const ShipmentOrdersLists = (): JSX.Element | null => {

    const id = Number(useParams().id);

    const items = useLiveQuery(
        () => db.shipmentOrders
            .where({ shipmentListId: id })
            .toArray()
        ,
        [id]
    )

    const valid = useLiveQuery(
        () => db.shipmentLists
            .get(id)
        ,
        [id]
    )

    if (!items || !valid) {
        return null
    }

    const data = items.map(i => ({
        name: i.name,
        phone: i.phone
    }))

    return(
        <>
        <ul>
            {items?.map(i => <li key={i.id}>
                {i.name} {i.phone} 
                    <button 
                        type='button' 
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        onClick={() => db.shipmentOrders.delete(i.id!)}>
                        Delete
                    </button>
                    <UpdateButton item={i} />
            </li>)}
        </ul>
        <ProductForm shipmentListId={id} />
        <CSVLink data={data}>Download</CSVLink>
        </>
    )

}

export default ShipmentOrdersLists