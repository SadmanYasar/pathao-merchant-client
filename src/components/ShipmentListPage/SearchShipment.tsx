import { useLiveQuery } from "dexie-react-hooks"
import { useState, useEffect } from "react"
import { db } from "../../models/db"
import { ShipmentList } from "../../models/ShipmentList"
import ShipmentLists from "./ShipmentLists"

const SearchShipment = () => {
    const lists = useLiveQuery(
        () => {
            return db.shipmentLists.toArray()
        }
    )

    const [title, settitle] = useState<string>('')
    const [filters, setfilters] = useState<ShipmentList[]>([])

    useEffect(() => {
        if (!title) {
            return setfilters([])
        }
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

export default SearchShipment