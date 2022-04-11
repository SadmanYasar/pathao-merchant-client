import { Button, Flex, FormControl, GridItem, Heading, Input, InputGroup, InputRightElement, SimpleGrid, VStack } from "@chakra-ui/react"
import { useLiveQuery } from "dexie-react-hooks"
import { motion } from "framer-motion"
import { useState, useEffect, FormEvent } from "react"
import { db } from "../../models/db"
import { ShipmentList } from "../../models/ShipmentList"
import ClearButton from "../ClearButton"
import ShipmentLists from "./ShipmentLists"

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
        if (!title) {
            setvisible(false)
            return setfilters([])
        }

        if (!visible) {
            setvisible(true)
        }

        try {
            const re = new RegExp(title, 'i')
            const result = lists?.filter(li => re.test(li.title))
            result ? setfilters(result) : setfilters([])
        } catch (error) {
            console.log(error)
            //TODO - ADD ERROR COMPONENT TO DISPLAY THIS ERROR
        }
    }, [title, lists])

    const handleSubmit = async (e : FormEvent<HTMLElement>) => {
        e.preventDefault()
        try {
            await db.shipmentLists
                .add({ title: title })
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
            alignItems="center">
            <VStack
                w={{ base: 'full', md: '50%' }}
                h='full'
                p={10}
                spacing={10}>
                <Heading as={'h1'} size='2xl'>Shipments</Heading>
                <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                    <GridItem colSpan={colspan}>
                        <FormControl>
                            <InputGroup>
                                <Input 
                                    id='title' 
                                    type='text' 
                                    value={title}
                                    size="lg"
                                    onChange={({ target }) => 
                                        settitle(target.value)}
                                    placeholder='Search or add a shipment'
                                />
                                <InputRightElement>
                                    <ClearButton visible={visible} onClick={handleClearButtonClick} />
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </GridItem>
                    <GridItem  colSpan={colspan}>
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button
                                size="lg"
                                w='full'
                                id='login-button'
                                type="submit"
                                onClick={handleSubmit}
                                bgColor={'red.400'}
                                _hover={{
                                    bgColor: 'red.500'
                                
                                }}
                                _active={{
                                    bgColor: 'red.500'
                                }}>
                                Add
                            </Button>
                            {/* <IconButton
                                type='submit'
                                aria-label='add-shipment'
                                onClick={handleSubmit}
                                isRound={true}
                                icon={<AddIcon />}
                            /> */}
                        </motion.div>
                    </GridItem>
                </SimpleGrid>
                <ShipmentLists list={filters} />
            </VStack>
        </Flex>
    )
}

export default SearchOrAddShipment