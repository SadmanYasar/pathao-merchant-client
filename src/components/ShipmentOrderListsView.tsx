import React from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../models/db'
import { CSVLink } from 'react-csv'
import { Link as RouterLink, useParams } from 'react-router-dom'
import ProductForm from './ProductForm'
import { FormattedCSVData } from '../types'
import UpdateOrderButton from './UpdateOrderButton'
import ModalForm from './ShipmentPage/ModalForm'
import { Button, Flex, HStack, Link, Text } from '@chakra-ui/react'
import ToggleThemeButton from './ToggleThemeButton'

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
        <Flex flexDirection={'column'} w='full' h='100vh'>
            <HStack w={'full'} justify={'space-between'} border='1px' borderColor={'red'}>
                <Link as={RouterLink} to='/'>
                    <Text p={'2'} fontSize='2xl'>Home</Text>
                </Link>
                <ToggleThemeButton />
            </HStack>
            <ModalForm openModalLabel='Add' header='Add entry'>
                <ProductForm shipmentListId={id} />
            </ModalForm>
            <Button type='button'>
                <CSVLink data={data} filename={`${valid.title}.csv`}>Download</CSVLink>
            </Button>
            <ul>
                {items?.map(i => <li key={i.id}>
                    {i.RecipientName} - {i.RecipientPhone} - {i.itemDescription}
                        <button 
                            type='button' 
                            onClick={() => db.shipmentOrders.delete(Number(i.id))}>
                            Delete
                        </button>
                        <UpdateOrderButton item={i} />
                </li>)}
            </ul>
        </Flex>
    )

}

export default ShipmentOrdersLists