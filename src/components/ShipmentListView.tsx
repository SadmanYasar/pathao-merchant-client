import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { CSVLink } from 'react-csv'
import { useParams } from 'react-router-dom'
import ProductForm from './ProductForm'

const ShipmentListView = () => {

    const id = Number(useParams().id);

    const items = useLiveQuery(
        () => db.shipmentOrders
            .where({ shipmentListId: id })
            .toArray()
        ,
        [id]
    )

    if (!items) return null;

    const data = items.map(i => ({
        name: i.name,
        phone: i.phone
    }))

    return(
        <>
        <ul>
            {items.map(i => <li key={i.id}>{i.name} {i.phone}</li>)}
        </ul>
        <ProductForm shipmentListId={id} />
        <CSVLink data={data}>Download</CSVLink>
        </>
    )

}

export default ShipmentListView