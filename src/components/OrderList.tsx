import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'

const OrderList = () => {
    const orders = useLiveQuery(
        () => db.orders.toArray()
    )

    return(
        <ul>
            {orders?.map(o => <li key={o.id}>
                {o.name} {o.phone}
            </li>)}
        </ul>
    )
}

export default OrderList