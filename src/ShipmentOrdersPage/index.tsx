import React from 'react'
import { Flex, HStack, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import ToggleThemeButton from '../components/ToggleThemeButton'
import ShipmentOrdersLists from './ShipmentOrderLists'

const ShipmentOrdersPage = () => {
    return(
        <Flex flexDirection={'column'} w='full' h='100vh' alignItems={'center'}>
            <HStack paddingLeft={4} w={'full'}>
                <Link as={RouterLink} to='/'>
                    <Text p={'2'} fontSize='2xl'>Home</Text>
                </Link>
                <ToggleThemeButton />
            </HStack>
            <ShipmentOrdersLists />
        </Flex>
    )
}

export default ShipmentOrdersPage