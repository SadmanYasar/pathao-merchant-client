import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { db } from '../models/db';
import { ShipmentOrder } from '../models/ShipmentOrder';

interface CardModalProps {
    item: ShipmentOrder;
}

const CardModal = ({ item } : CardModalProps): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const data = Object.values(item)

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
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {data.map((i,index) => <p key={index}>{i}</p>)}
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default CardModal;