import { Flex, Heading } from "@chakra-ui/react"
//import ShipmentAddForm from "../ShipmentAddForm"
import SearchOrAddShipment from "./SearchOrAddShipment"

const ShipmentListPage = () => {
    return(
        <>
        <Flex 
            bg='blue.400'
            flexDirection={'column'}
            height='100vh'>
            <Heading paddingBottom={'20px'}>Shipments</Heading>
            <SearchOrAddShipment />
            {/* <ShipmentAddForm /> */}
        </Flex>
        </>
    )
}

export default ShipmentListPage