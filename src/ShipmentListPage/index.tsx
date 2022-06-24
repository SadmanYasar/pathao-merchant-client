import { Flex } from '@chakra-ui/react'
import ToggleThemeButton from '../components/ToggleThemeButton'
import SearchOrAddShipment from './SearchOrAddShipment'

const ShipmentListPage = () => {
    return (
        <Flex
            flexDirection={'column'}
            w='full'
            h='100vh'>
            <ToggleThemeButton />
            <SearchOrAddShipment />
        </Flex>
    )
}

export default ShipmentListPage