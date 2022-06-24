import { DeleteIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    HStack,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import { db } from '../models/db'
import { ShipmentOrder } from '../models/ShipmentOrder'
import EntryDetail from './EntryDetail'

interface Props {
    item: ShipmentOrder;
}

const CardModal = ({ item }: Props): JSX.Element => {
    const [visible, setvisible] = useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box
                key={item.id}
                p={5}
                m={3}
                w='full'
                css={{
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
                }}
                bgColor={'whiteAlpha.300'}>
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
                            {visible ? 'Update' : 'Back'}
                        </Button>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CardModal