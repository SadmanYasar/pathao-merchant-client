import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { CSVLink } from 'react-csv'
import { useParams } from 'react-router-dom'
import ProductForm from './ProductForm'
import UpdateOrderButton from './UpdateOrderButton'

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
                    <UpdateOrderButton item={i} />
            </li>)}
        </ul>
        <ProductForm shipmentListId={id} />
        <CSVLink data={data}>Download</CSVLink>
        </>
    )

}

export default ShipmentOrdersLists