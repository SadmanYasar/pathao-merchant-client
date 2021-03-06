import { db } from '../models/db'
import { Link as RouteLink } from 'react-router-dom'
import { ShipmentList } from '../models/ShipmentList'
import { Flex, Box, Text, IconButton, HStack, Link } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

interface ShipmentListsProps {
    list: ShipmentList[]
}

const ShipmentLists = ({ list }: ShipmentListsProps): JSX.Element => {
    return (
        <>
            <Flex
                width='full'
                justifyContent='center'
                direction='column'>
                {list
                    .map(li =>
                        <Box
                            key={li.id}
                            p={5}
                            m={3}
                            css={{
                                boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                            }}
                            bgColor={'whiteAlpha.300'}>
                            <HStack w={'full'} spacing='10' justify={'space-between'}>
                                <Link as={RouteLink} to={`/shipments/${li.id}`} isTruncated>
                                    <Text fontSize='2xl' isTruncated>{li.title}</Text>
                                </Link>
                                <IconButton
                                    aria-label={'delete-shipment'}
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
                                    onClick={() => db.deleteShipmentList(li.id!)}
                                />
                            </HStack>
                        </Box>
                    )}
            </Flex>
        </>
    )
}

export default ShipmentLists