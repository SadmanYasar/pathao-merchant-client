import { Box, Flex, GridItem, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { useLiveQuery } from 'dexie-react-hooks'
import { useState, useEffect, FormEvent } from 'react'
import { db } from '../models/db'
import { ShipmentList } from '../models/ShipmentList'
import AddShipmentButton from '../components/AddShipmentButton'
import SearchBar from '../components/SearchBar'
import ShipmentLists from './ShipmentLists'

const SearchOrAddShipment = (): JSX.Element => {
    const lists = useLiveQuery(
        () => {
            return db.shipmentLists.toArray()
        }
    )

    const [title, settitle] = useState<string>('')
    const [filters, setfilters] = useState<ShipmentList[]>([])

    const [visible, setvisible] = useState<boolean>(false)

    useEffect(() => {
        if (!title.trim()) {
            setvisible(false)
            return setfilters([])
        }

        if (!visible) {
            setvisible(true)
        }

        try {
            const re = new RegExp(title.trim(), 'i')
            const result = lists?.filter(li => re.test(li.title))
            result ? setfilters(result) : setfilters([])
        } catch (error) {
            //console.log(error)
            //TODO - ADD ERROR COMPONENT TO DISPLAY THIS ERROR
        }
    }, [title, lists])

    const handleSubmit = async (e : FormEvent<HTMLElement>) => {
        e.preventDefault()

        if(!title) return null

        try {
            await db.shipmentLists
                .add({ title: title.trim() })
        } catch (e: unknown) {
            console.log(e)
            //TODO - ADD ERROR COMPONENT
        }
    }

    const handleClearButtonClick = () => {
        settitle('')
    }

    const colspan = 2
    
    return(
        <Flex 
            flexDirection={'column'}
            height='full'
            py={[5, 10, 20]}
            alignItems='center'>
            <VStack
                w={{ base: 'full', md: '50%' }}
                h='full'
                p={10}
                spacing={10}>
                <Heading as={'h1'} size='2xl'>Shipments</Heading>
                    <Box w={'full'}>
                    <form onSubmit={handleSubmit}>
                        <SimpleGrid columns={2} columnGap={3} rowGap={6} w='full'>
                            <GridItem colSpan={colspan}>
                                <SearchBar 
                                    onChange={({ target }) => settitle(target.value)}
                                    clearInput={handleClearButtonClick}
                                    value={title}
                                    visible={visible}
                                />
                            </GridItem>
                            <GridItem  colSpan={colspan}>
                                <AddShipmentButton />
                            </GridItem>
                        </SimpleGrid>
                    </form>
                    </Box>
                <ShipmentLists list={filters} />
            </VStack>
        </Flex>
    )
}

export default SearchOrAddShipment