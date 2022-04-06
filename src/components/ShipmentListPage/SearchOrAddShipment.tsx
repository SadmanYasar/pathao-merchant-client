import { useLiveQuery } from "dexie-react-hooks"
import { useState, useEffect, FormEvent } from "react"
import { db } from "../../models/db"
import { ShipmentList } from "../../models/ShipmentList"
import ShipmentLists from "./ShipmentLists"

const SearchOrAddShipment = () => {
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
        try {
            const re = new RegExp(title, 'i')
            const result = lists?.filter(li => re.test(li.title))
            result ? setfilters(result) : setfilters([])
        } catch (error) {
            console.log(error)
            //TODO - ADD ERROR COMPONENT TO DISPLAY THIS ERROR
        }
    }, [title, lists])

    const handleSubmit = async (e : FormEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            await db.shipmentLists
                .add({ title: title })
        } catch (e: unknown) {
            console.log(e)
            //TODO - ADD ERROR COMPONENT
        }
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={title}
                    onChange={({ target }) => settitle(target.value)}
                    placeholder='search or add shipment'
                />
                <button type='submit'>Add shipment</button>
            </form>
            <ShipmentLists list={filters} />
        </>
    )
}

export default SearchOrAddShipment