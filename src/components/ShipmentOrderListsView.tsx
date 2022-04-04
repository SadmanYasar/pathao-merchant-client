import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { CSVLink } from 'react-csv'
import { useParams } from 'react-router-dom'
import ProductForm from './ProductForm'
import { FormattedCSVData } from '../types'
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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data: FormattedCSVData[] = items.map(({id, shipmentListId, itemDescription, ...rest}) => rest)

    return(
        <>
        <ul>
            {items?.map(i => <li key={i.id}>
                {i.RecipientName} - {i.RecipientPhone} - {i.itemDescription}
                    <button 
                        type='button' 
                        onClick={() => db.shipmentOrders.delete(Number(i.id))}>
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