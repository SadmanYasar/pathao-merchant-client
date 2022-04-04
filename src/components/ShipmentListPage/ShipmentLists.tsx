import React, { useEffect, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../models/db'
import { Link } from 'react-router-dom'
import ShipmentAddForm from '../ShipmentAddForm'
import { ShipmentList } from '../../models/ShipmentList'

const SearchShipment = () => {
    const lists = useLiveQuery(
        () => {
            console.log('wtf')
            return db.shipmentLists.toArray()
        }
    )

    const [title, settitle] = useState<string>('')
    const [filters, setfilters] = useState<ShipmentList[]>([])

    useEffect(() => {
        const re = new RegExp(title, 'i')
        const result = lists?.filter(li => re.test(li.title))
        result ? setfilters(result) : setfilters([])
    }, [title, lists])
    
    return(
        <>
            <h3>Search</h3>
            <input
                type='text'
                value={title}
                onChange={({ target }) => settitle(target.value)}
            />
            <ShipmentLists list={filters} />
        </>
    )
}

interface ShipmentListsProps {
    list: ShipmentList[]
}

const ShipmentLists = ({ list }: ShipmentListsProps) => {
    /* const lists = useLiveQuery(
        () => db.shipmentLists.toArray()
    )

    if (!lists) return null; */

    return(
        <>
        <ShipmentAddForm />
        <ul>
            {list.map(li => 
                <li key={li.id}>
                    <Link to={`/shipments/${li.id}`}>{li.title}</Link>
                    <button 
                        type='button' 
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        onClick={() => db.deleteShipmentList(li.id!)}
                    >
                        Delete
                    </button>
                </li>)}
        </ul>
        </>
    )
}

const ShipmentListPage = () => {
    return(
        <>
            <h1>Shipments</h1>
            <SearchShipment />
        </>
    )
}

export default ShipmentListPage
