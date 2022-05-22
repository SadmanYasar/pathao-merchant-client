import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { CSVLink } from 'react-csv'
import { useParams } from 'react-router-dom'
import { FormattedCSVData } from '../types'
import AddProductModal from './AddProductModal'
import { Button, VStack } from '@chakra-ui/react'
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
    )

}

export default ShipmentOrdersLists