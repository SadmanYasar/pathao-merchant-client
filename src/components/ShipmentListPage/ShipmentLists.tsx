import { db } from '../../models/db'
import { Link } from 'react-router-dom'
import { ShipmentList } from '../../models/ShipmentList'
import { Flex, Box, Button, Text } from '@chakra-ui/react'

interface ShipmentListsProps {
    list: ShipmentList[]
}

const ShipmentLists = ({ list }: ShipmentListsProps): JSX.Element => {
    return(
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
                    css={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                    }}>
                    <Link to={`/shipments/${li.id}`}>
                        <Text fontSize='4xl' isTruncated>{li.title}</Text>
                    </Link>
                    <Button
                        size='lg'
                        w='full'
                        type='button'
                        bgColor={'red.400'}
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        onClick={() => db.deleteShipmentList(li.id!)}>
                        Delete
                    </Button>
                </Box>
            )}
            </Flex>
        </>
    )
}

export default ShipmentLists