import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { ShipmentList } from '../models/ShipmentList'

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

    return(
        <ul>
            {items.map(i => <li key={i.id}>{i.name} {i.phone}</li>)}
        </ul>
    )

}

export default ShipmentListView