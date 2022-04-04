import ShipmentAddForm from "../ShipmentAddForm"
import SearchShipment from "./SearchShipment"

const ShipmentListPage = () => {
    return(
        <>
            <h1>Shipments</h1>
            <SearchShipment />
            <ShipmentAddForm />
        </>
    )
}

export default ShipmentListPage