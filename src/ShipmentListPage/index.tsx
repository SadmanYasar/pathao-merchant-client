import { Flex } from '@chakra-ui/react'
import Notification from '../components/Notification'
import ToggleThemeButton from '../components/ToggleThemeButton'
import SearchOrAddShipment from './SearchOrAddShipment'

const ShipmentListPage = () => {
    return (
        <Flex
            flexDirection={'column'}
            w='full'
            h='100vh'>
            <Notification />
            <ToggleThemeButton />
            <SearchOrAddShipment />
        </Flex>
    )
}

export default ShipmentListPage