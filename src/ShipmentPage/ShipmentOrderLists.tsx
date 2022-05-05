import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { CSVLink } from 'react-csv'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { FormattedCSVData } from '../types'
import AddProductModal from './AddProductModal'
import { Button, Flex, HStack, Link, Text, VStack } from '@chakra-ui/react'
import ToggleThemeButton from '../components/ToggleThemeButton'
import CardModal from './CardModal'

const ShipmentOrdersLists = (): JSX.Element | null => {

    const id = Number(useParams().id)

    const items = useLiveQuery(
        () => db.shipmentOrders
            .where({ shipmentListId: id })
            .toArray()
        ,
        [id]
    )

    const valid = useLiveQuery(
        () => db.shipmentLists
            .get(id)
        ,
        [id]
    )

    if (!items || !valid) {
        return null
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data: FormattedCSVData[] = items.map(({id, shipmentListId, ...rest}) => rest)

    return(
        <Flex flexDirection={'column'} w='full' h='100vh' alignItems={'center'}>
            <HStack paddingLeft={4} w={'full'}>
                <Link as={RouterLink} to='/'>
                    <Text p={'2'} fontSize='2xl'>Home</Text>
                </Link>
                <ToggleThemeButton />
            </HStack>
            <VStack
                w={{ base: 'full', md: '50%' }}
                h='full'
                p={10}
                spacing={10}>
                    <AddProductModal header='Add entry' id={id} />
                    <Button 
                        type='button'
                        bgColor={'red.400'}
                        _hover={{
                            bgColor: 'red.500'
                        
                        }}
                        _active={{
                            bgColor: 'red.500'
                    }}>
                        <CSVLink data={data} filename={`${valid.title}.csv`}>Download</CSVLink>
                    </Button>

                    {items
                        .map(i =>
                            <CardModal key={i.id} item={i} /> 
                    )}
            </VStack>
        </Flex>
    )

}

export default ShipmentOrdersLists