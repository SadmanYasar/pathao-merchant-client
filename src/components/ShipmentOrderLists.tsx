import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { CSVLink } from 'react-csv'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { FormattedCSVData } from '../types'
import AddProductModal from '../ShipmentPage/AddProductModal'
import { Box, Button, Flex, HStack, IconButton, Link, Text, VStack } from '@chakra-ui/react'
import ToggleThemeButton from './ToggleThemeButton'
import { DeleteIcon } from '@chakra-ui/icons'

const ShipmentOrdersLists = (): JSX.Element | null => {

    const id = Number(useParams().id);

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
    const data: FormattedCSVData[] = items.map(({id, shipmentListId, itemDescription, ...rest}) => rest)

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
                        <Box
                            key={i.id}
                            p={5}
                            m={3}
                            w='full'
                            css={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                        }}>
                            <HStack w={'full'} spacing='10' justify={'space-between'}>
                                <Text fontSize='2xl' isTruncated>{i.StoreName}</Text>
                                <IconButton 
                                    aria-label={'delete-shipment-entry'}
                                    type='button'
                                    color={'white'}
                                    bg='red.400'
                                    isRound
                                    _hover={{
                                        bgColor: 'red.500'
                                    
                                    }}
                                    _active={{
                                        bgColor: 'red.500'
                                    }}
                                    icon={<DeleteIcon boxSize={6} />}
                                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                    onClick={() => db.shipmentOrders.delete(Number(i.id))}
                                />
                            </HStack>
                        </Box>)}

{/*                     <ul>
                    {items?.map(i => <li key={i.id}>
                        {i.StoreName} - {i.RecipientPhone} - {i.itemDescription}
                            <button 
                                type='button' 
                                onClick={() => db.shipmentOrders.delete(Number(i.id))}>
                                Delete
                            </button>
                            <UpdateOrderButton item={i} />
                    </li>)}
                </ul> */}
            </VStack>
        </Flex>
    )

}

export default ShipmentOrdersLists