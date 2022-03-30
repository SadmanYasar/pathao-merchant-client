import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import ShipmentListView from './ShipmentListView'

const ShipmentLists = () => {
    const lists = useLiveQuery(
        () => db.shipmentLists.toArray()
    )

    if (!lists) return null;

    return(
        <>
        {lists.map(li => <ShipmentListView  key={li.id} shipmentList={li}/>)}
        </>
    )
}

export default ShipmentLists