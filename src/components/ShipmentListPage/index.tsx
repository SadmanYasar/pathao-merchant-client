import { Flex, Heading } from "@chakra-ui/react"
//import ShipmentAddForm from "../ShipmentAddForm"
import SearchShipment from "./SearchShipment"

const ShipmentListPage = () => {
    return(
        <>
        <Flex 
            bg='blue.400'
            flexDirection={'column'}
            height='100vh'>
            <Heading paddingBottom={'20px'}>Shipments</Heading>
            <SearchShipment />
            {/* <ShipmentAddForm /> */}
        </Flex>
        </>
    )
}

export default ShipmentListPage