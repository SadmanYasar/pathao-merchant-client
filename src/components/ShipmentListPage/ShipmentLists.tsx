import { db } from '../../models/db'
import { Link } from 'react-router-dom'
import { ShipmentList } from '../../models/ShipmentList'

interface ShipmentListsProps {
    list: ShipmentList[]
}

const ShipmentLists = ({ list }: ShipmentListsProps) => {
    return(
        <>
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

export default ShipmentLists