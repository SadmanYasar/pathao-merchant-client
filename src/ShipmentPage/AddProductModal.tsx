import { AddIcon } from "@chakra-ui/icons";
import { 
    useDisclosure, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody, 
    Modal,
    IconButton,
} from "@chakra-ui/react"
import ProductForm from "../components/ProductForm";

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
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{props.header}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <ProductForm shipmentListId={props.id} onClose={onClose}/>
            </ModalBody>
            </ModalContent>
        </Modal>
        </>
    )
}

export default AddProductModal