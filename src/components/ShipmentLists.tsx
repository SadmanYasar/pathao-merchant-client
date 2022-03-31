import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { Link } from 'react-router-dom'

export const ShipmentLists = () => {
    const lists = useLiveQuery(
        () => db.shipmentLists.toArray()
    )

    if (!lists) return null;

    return(
        <>
        <h1>Shipments</h1>
        {/* {lists.map(li => <ShipmentListView  key={li.id} shipmentList={li}/>)} */}
        {lists.map(li => 
            <Link key={li.id} to={`/shipments/${li.id}`}>{li.title}</Link>)}
        </>
    )
}