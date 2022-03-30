import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { ShipmentList } from '../models/ShipmentList'
import ProductForm from './ProductForm'
import { CSVLink } from 'react-csv'

interface Props {
    shipmentList: ShipmentList
}

const ShipmentListView = ({ shipmentList }: Props) => {
    const items = useLiveQuery(
        () => db.shipmentOrders
            .where({ shipmentListId: shipmentList.id })
            .toArray()
        ,
        [shipmentList.id]
    )

    if (!items) return null;

    const data = items.map(i => ({
        name: i.name,
        phone: i.phone
    }))

    return(
        <>
        <h2>{shipmentList.title}</h2>
        <ul>
            {items.map(i => <li key={i.id}>{i.name} {i.phone}</li>)}
        </ul>
        <ProductForm shipmentList={shipmentList} />
        <CSVLink data={data}>Download</CSVLink>
        </>
    )

}

export default ShipmentListView