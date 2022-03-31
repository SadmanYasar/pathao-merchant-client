import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { Link } from 'react-router-dom'
import ShipmentAddForm from './ShipmentAddForm'

export const ShipmentLists = () => {
    const lists = useLiveQuery(
        () => db.shipmentLists.toArray()
    )

    if (!lists) return null;

    return(
        <>
        <h1>Shipments</h1>
        <ShipmentAddForm />
        <ul>
            {lists.map(li => 
                <li key={li.id}>
                    <Link to={`/shipments/${li.id}`}>{li.title}</Link>
                </li>)}
        </ul>
        </>
    )
}