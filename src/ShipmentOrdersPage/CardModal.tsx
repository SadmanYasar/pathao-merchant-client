import { DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Tr, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { db } from '../models/db'
import { ShipmentOrder } from '../models/ShipmentOrder'
import ProductForm from './ProductForm'

interface Props {
    item: ShipmentOrder;
}

interface EntryDetailProps {
    item: ShipmentOrder;
    visible: boolean;
}

const EntryDetail = ({ item, visible } : EntryDetailProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, shipmentListId, MerchantOrderId, ...rest } = item
    const arr = Object.entries(rest)
    return(
        <Box>
        {visible && 
        <>
        <TableContainer>
            <Table variant='striped' colorScheme='red'>
                <Tbody>
                {arr.map((i, index) => 
                    <Tr key={index}>
                        <Td>{i[0].replace('(*)', '')}</Td>
                        <Td isNumeric>{i[1]}</Td>
                    </Tr>)}
                </Tbody>
            </Table>
        </TableContainer>
        </>}
        {!visible &&
        <>
            <Button form='product-form' type='submit'>Update</Button>
            <ProductForm initialValues={item} toAdd={false} id={id} />
        </>
        }
        </Box>
    )
}

const CardModal = ({ item } : Props): JSX.Element => {
    const [visible, setvisible] = useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
        <Box
            key={item.id}
            p={5}
            m={3}
            w='full'
            css={{ boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        }}>
            <HStack w={'full'} spacing='10' justify={'space-between'}>
                <Text fontSize='2xl' isTruncated onClick={onOpen}>
                    {item['RecipientName(*)']} - {item['RecipientPhone(*)']} - {item.ItemDesc}
                </Text>
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
                    onClick={() => db.shipmentOrders.delete(Number(item.id))} 
                />
            </HStack>
        </Box>
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            scrollBehavior={'inside'}
            closeOnOverlayClick={false}
            >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <EntryDetail item={item} visible={visible} />
            </ModalBody>
            <ModalFooter>
                <Button mr={3} onClick={() => setvisible(!visible)}>
                    {visible ? 'Update' : 'Cancel'}
                </Button>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default CardModal