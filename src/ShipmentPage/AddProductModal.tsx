import { AddIcon } from '@chakra-ui/icons';
import { 
    useDisclosure, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody, 
    Modal,
    IconButton,
    Button,
    HStack,
} from '@chakra-ui/react'
import { ShipmentOrder } from '../models/ShipmentOrder';
import ProductForm from './ProductForm';

const initialValues: ShipmentOrder = {
	'ItemType(*)': 'parcel',
	'StoreName(*)': '',
    MerchantOrderId: '',
    'RecipientName(*)': '',
	'RecipientPhone(*)': '',
	'RecipientCity(*)': '',
	'RecipientZone(*)': '',
    RecipientArea: '',
	'RecipientAddress(*)': '',
	'AmountToCollect(*)': 0,
	'ItemQuantity(*)': 1,
	'ItemWeight(*)': 0,
	ItemDesc: '',
    SpecialInstruction: ''
}

interface AddProductModalProps {
    id: number;
    header: string;
}

const AddProductModal = (props : AddProductModalProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <IconButton 
            aria-label={'add-shipment-item'}
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
            icon={<AddIcon boxSize={6} />}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            onClick={onOpen}
        />
        <Modal 
            blockScrollOnMount={false} 
            closeOnOverlayClick={false} 
            isOpen={isOpen} 
            onClose={onClose}
            >
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{props.header}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <ProductForm shipmentListId={props.id} onClose={onClose} toAdd={true} initialValues={initialValues} />
                <HStack w={'full'} justifyContent='right' paddingTop={4}>
                    <Button form='product-form' type='submit' bg='red.400' mr={3}>
                    Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </HStack>
            </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}

export default AddProductModal